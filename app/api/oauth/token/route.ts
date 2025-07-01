import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/app/prisma';
import { randomBytes } from 'crypto';
import { analyticsDB } from '@/lib/analytics-db';

// Type for client object
interface ClientType {
  id: string;
  clientId: string;
  clientSecret: string | null;
}

// Helper function to create response headers
function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

// Helper function to log OAuth analytics
async function logOAuthAnalytics(request: NextRequest, grantType: string, clientId: string, userId?: string, scopes?: string[], usePKCE?: boolean, redirectUri?: string) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               '127.0.0.1';
    
    await analyticsDB.logRequest({
      timestamp: new Date(),
      endpoint: '/api/oauth/token',
      method: request.method,
      statusCode: 200,
      responseTime: 0, // Will be updated by middleware
      clientId,
      userId,
      ipAddress: ip,
      userAgent: request.headers.get('user-agent') || '',
      oauthGrantType: grantType,
      tokenScopes: scopes || [],
      usePKCE,
      redirectUri
    });
  } catch (error) {
    console.warn('Failed to log OAuth analytics:', error);
  }
}

// Helper function to create access and refresh tokens
async function createTokens(clientId: string, userId: string, resource?: string) {
  const accessToken = randomBytes(32).toString('hex');
  const refreshToken = randomBytes(32).toString('hex');
  const accessTokenExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes for testing
  const refreshTokenExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  // Create access token
  await prisma.accessToken.create({
    data: {
      token: accessToken,
      expiresAt: accessTokenExpiresAt,
      clientId,
      userId,
      resource,
    },
  });

  // Create refresh token
  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      expiresAt: refreshTokenExpiresAt,
      clientId,
      userId,
      resource,
    },
  });

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
    token_type: 'Bearer',
    expires_in: 300, // 5 minutes for testing
  };
}

// Handle refresh token grant
async function handleRefreshTokenGrant(
  request: NextRequest,
  refreshTokenValue: string, 
  client: ClientType, 
  clientSecret: string | undefined, 
  resource?: string
) {
  console.log('[RefreshToken] Processing refresh token grant');
  
  // Find the refresh token
  const refreshTokenRecord = await prisma.refreshToken.findUnique({
    where: { token: refreshTokenValue },
    include: { user: true, client: true }
  });

  if (!refreshTokenRecord) {
    console.log('[RefreshToken] Refresh token not found');
    return NextResponse.json({ error: 'invalid_grant' }, { 
      status: 400,
      headers: getCorsHeaders()
    });
  }

  // Check if refresh token belongs to the client
  if (refreshTokenRecord.clientId !== client.id) {
    console.log('[RefreshToken] Refresh token client mismatch');
    return NextResponse.json({ error: 'invalid_grant' }, { 
      status: 400,
      headers: getCorsHeaders()
    });
  }

  // Check if refresh token is expired
  if (refreshTokenRecord.expiresAt < new Date()) {
    console.log('[RefreshToken] Refresh token expired');
    return NextResponse.json({ error: 'invalid_grant' }, { 
      status: 400,
      headers: getCorsHeaders()
    });
  }

  // Validate client credentials for confidential clients
  if (client.clientSecret && (client.clientSecret ?? undefined) !== clientSecret) {
    console.log('[RefreshToken] Invalid client credentials');
    return NextResponse.json({ error: 'invalid_client' }, { 
      status: 401,
      headers: getCorsHeaders()
    });
  }

  // For public clients (no client secret), rotate the refresh token per OAuth 2.1
  if (!client.clientSecret) {
    console.log('[RefreshToken] Rotating refresh token for public client');
    await prisma.refreshToken.delete({ where: { id: refreshTokenRecord.id } });
  }

  // Use existing resource or provided resource
  const tokenResource = resource || refreshTokenRecord.resource || undefined;

  // Create new tokens
  const tokens = await createTokens(client.id, refreshTokenRecord.userId, tokenResource);

  // Log analytics for refresh token grant
  await logOAuthAnalytics(request, 'refresh_token', client.id, refreshTokenRecord.userId);

  console.log('[RefreshToken] Tokens refreshed successfully');
  return NextResponse.json(tokens, { headers: getCorsHeaders() });
}

export async function POST(request: NextRequest) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse("OK", {
      status: 200,
      headers: getCorsHeaders(),
    });
  }

  console.log("Received token request");

  const formData = await request.formData();
  const grant_type = formData.get('grant_type') as string;
  const code = formData.get('code') as string;
  const redirect_uri = formData.get('redirect_uri') as string;
  const client_id = formData.get('client_id') as string;
  const client_secret = formData.get('client_secret') as string | null;
  const code_verifier = formData.get('code_verifier') as string | undefined;
  const resource = formData.get('resource') as string | undefined;
  const refresh_token = formData.get('refresh_token') as string | undefined;

  console.log("Form data:", { grant_type, code, redirect_uri, client_id });

  if (grant_type !== 'authorization_code' && grant_type !== 'refresh_token') {
    console.log("Unsupported grant type:", grant_type);
    return NextResponse.json({ error: 'unsupported_grant_type' }, { 
      status: 400,
      headers: getCorsHeaders()
    });
  }

  // Parameter validation based on grant type
  if (grant_type === 'authorization_code') {
    if (!code || !redirect_uri || !client_id) {
      console.log("Invalid request: missing parameters for authorization_code");
      return NextResponse.json({ error: 'invalid_request' }, { 
        status: 400,
        headers: getCorsHeaders()
      });
    }
  } else if (grant_type === 'refresh_token') {
    if (!refresh_token || !client_id) {
      console.log("Invalid request: missing parameters for refresh_token");
      return NextResponse.json({ error: 'invalid_request' }, { 
        status: 400,
        headers: getCorsHeaders()
      });
    }
  }

  try {
    console.log("Finding client for client_id:", client_id);
    const client = await prisma.client.findUnique({ where: { clientId: client_id } });
    if (!client) {
      console.log("Invalid client.", { client_id });
      return NextResponse.json({ error: 'invalid_client' }, { 
        status: 401,
        headers: getCorsHeaders()
      });
    }

    // Handle refresh token grant
    if (grant_type === 'refresh_token') {
      return await handleRefreshTokenGrant(request, refresh_token!, client, client_secret ?? undefined, resource);
    }

    // Continue with authorization code grant (existing logic)

    console.log("Finding auth code:", code);
    const authCode = await prisma.authCode.findUnique({ where: { code } });
    if (!authCode || authCode.clientId !== client.id || authCode.redirectUri !== redirect_uri) {
      console.log("Invalid code or redirect_uri mismatch.", { authCode, client_id: client.id, redirect_uri });
      return NextResponse.json({ error: 'invalid_grant' }, { 
        status: 400,
        headers: getCorsHeaders()
      });
    }
    console.log("Found auth code for user:", authCode.userId);

    if (authCode.expiresAt < new Date()) {
      console.log("Auth code expired at:", authCode.expiresAt);
      return NextResponse.json({ error: 'invalid_grant' }, { 
        status: 400,
        headers: getCorsHeaders()
      });
    }
    console.log("Auth code is valid.");

    // PKCE validation
    let pkceValid = false;
    if (authCode.codeChallenge) {
      if (!code_verifier) {
        return NextResponse.json({ error: 'invalid_request' }, {
          status: 400,
          headers: getCorsHeaders()
        });
      }
      if (authCode.codeChallengeMethod === 'S256') {
        const { createHash } = await import('crypto');
        const hash = createHash('sha256').update(code_verifier).digest();
        const base64url = hash.toString('base64')
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
        pkceValid = base64url === authCode.codeChallenge;
      } else if (authCode.codeChallengeMethod === 'plain' || !authCode.codeChallengeMethod) {
        pkceValid = code_verifier === authCode.codeChallenge;
      }
      if (!pkceValid) {
        return NextResponse.json({ error: 'invalid_grant' }, {
          status: 400,
          headers: getCorsHeaders()
        });
      }
    }

    // If PKCE is not present or not valid, require client secret for confidential clients
    if (!authCode.codeChallenge && client.clientSecret && client.clientSecret !== (client_secret ?? undefined)) {
      console.log("Invalid client_secret.", { client_id });
      return NextResponse.json({ error: 'invalid_client' }, { 
        status: 401,
        headers: getCorsHeaders()
      });
    }

    // Delete the auth code so it can't be used again
    console.log("Deleting auth code:", authCode.id);
    await prisma.authCode.delete({ where: { id: authCode.id } });
    console.log("Auth code deleted.");

    // Create tokens using helper function
    const tokens = await createTokens(
      client.id, 
      authCode.userId, 
      resource || authCode.resource || undefined
    );

    // Log analytics for authorization code grant
    await logOAuthAnalytics(
      request, 
      'authorization_code', 
      client.id, 
      authCode.userId,
      [], // Scopes would be extracted from auth code in full implementation
      !!authCode.codeChallenge,
      authCode.redirectUri
    );

    console.log("Access token and refresh token created.");

    return NextResponse.json(tokens, {
      headers: getCorsHeaders()
    });
  } catch (e) {
    console.error("Error in token endpoint:", e);
    return NextResponse.json({ error: 'server_error' }, { 
      status: 500,
      headers: getCorsHeaders()
    });
  }
} 
