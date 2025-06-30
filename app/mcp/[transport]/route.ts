import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import { prisma } from '@/app/prisma';
import { NextRequest } from 'next/server';

interface AccessTokenData {
  clientId: string;
  userId: string;
  user?: {
    id: string;
    name?: string | null;
    email?: string | null;
  };
  client?: {
    id: string;
    name: string;
  };
}

// Utility function for getting client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return '127.0.0.1';
}

// Helper function to log security events (Edge Runtime compatible)
async function logSecurityEvent(request: NextRequest, eventType: string, details: string, clientId?: string) {
  try {
    const host = request.headers.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    
    const securityData = {
      timestamp: new Date().toISOString(),
      eventType,
      ipAddress: getClientIP(request),
      userAgent: request.headers.get('user-agent') || '',
      clientId,
      details
    };

    await fetch(`${baseUrl}/api/analytics/security`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(securityData)
    }).catch(() => {
      // Silent fail - security logging shouldn't break auth
    });
  } catch (error) {
    console.warn('Security event logging failed:', error);
  }
}

// Authentication helper
async function authenticateRequest(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  
  console.log('[MCP] Auth header present:', !!authHeader);
  
  if (!authHeader) {
    console.log('[MCP] No auth header, returning 401');
    
    // Log security event for missing auth
    await logSecurityEvent(request, 'auth_failure', 'Missing authorization header');
    
    return null;
  }

  const token = authHeader.split(' ')[1];
  console.log('[MCP] Token extracted:', token ? 'present' : 'missing');
  
  if (!token) {
    console.log('[MCP] No token, returning 401');
    
    // Log security event for malformed auth header
    await logSecurityEvent(request, 'auth_failure', 'Malformed authorization header');
    
    return null;
  }

  try {
    console.log('[MCP] Looking up access token in database');
    const accessToken = await prisma.accessToken.findUnique({
      where: { token },
      include: {
        client: true,
        user: true
      }
    });

    console.log('[MCP] Access token found:', !!accessToken);
    
    if (!accessToken) {
      console.log('[MCP] No access token found, returning 401');
      
      // Log security event for invalid token
      await logSecurityEvent(request, 'invalid_token', 'Invalid access token provided');
      
      return null;
    }

    console.log('[MCP] Token expires at:', accessToken.expiresAt);
    console.log('[MCP] Current time:', new Date());
    
    if (accessToken.expiresAt < new Date()) {
      console.log('[MCP] Token expired, returning 401');
      
      // Log security event for expired token
      await logSecurityEvent(request, 'invalid_token', 'Expired access token used', accessToken.clientId);
      
      return null;
    }

    // Validate token audience - critical security requirement
    const host = request.headers.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const currentResource = `${protocol}://${host}`;
    
    if (accessToken.resource && accessToken.resource !== currentResource) {
      console.log('[MCP] Token audience mismatch. Expected:', currentResource, 'Got:', accessToken.resource);
      
      // Log security event for audience mismatch
      await logSecurityEvent(request, 'suspicious_activity', 
        `Token audience mismatch. Expected: ${currentResource}, Got: ${accessToken.resource}`, 
        accessToken.clientId);
      
      return null;
    }

    console.log('[MCP] Authentication successful, audience validated');
    return accessToken;
  } catch (e) {
    console.error('[MCP] Error validating token:', e);
    
    // Log security event for authentication error
    await logSecurityEvent(request, 'auth_failure', 
      `Authentication error: ${e instanceof Error ? e.message : 'Unknown error'}`);
    
    return null;
  }
}

// Helper function to log enhanced analytics
async function logEnhancedAnalytics(
  request: NextRequest, 
  accessToken: AccessTokenData | null, 
  requestBody: Record<string, unknown> | null,
  startTime: number,
  statusCode: number
) {
  try {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    // Extract MCP-specific data from request
    let mcpMethod: string | undefined;
    let toolName: string | undefined;
    
    if (requestBody) {
      mcpMethod = (typeof requestBody.method === 'string' ? requestBody.method : 'unknown');
      if (requestBody.params && typeof requestBody.params === 'object' && requestBody.params !== null) {
        const params = requestBody.params as Record<string, unknown>;
        if (typeof params.name === 'string') {
          toolName = params.name;
        }
      }
    }
    
    // Get or create MCP server registration
    let mcpServerId: string | undefined;
    try {
      const host = request.headers.get('host');
      const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
      const serverIdentifier = `${protocol}://${host}/mcp`;
      
      let mcpServer = await prisma.mCPServer.findUnique({
        where: { identifier: serverIdentifier }
      });
      
      if (!mcpServer) {
        mcpServer = await prisma.mCPServer.create({
          data: {
            name: 'Default MCP Server',
            identifier: serverIdentifier,
            description: 'MCP OAuth Server',
            version: '1.0.0'
          }
        });
      }
      
      mcpServerId = mcpServer.id;
    } catch (error) {
      console.warn('Failed to register MCP server:', error);
    }
    
    // Extract SSO context from user account
    let ssoProvider: string | undefined;
    let organization: string | undefined;
    
    if (accessToken?.user) {
      try {
        const account = await prisma.account.findFirst({
          where: { userId: accessToken.user.id }
        });
        if (account) {
          ssoProvider = account.provider;
        }
      } catch (error) {
        console.warn('Failed to get SSO context:', error);
      }
    }
    
    const host = request.headers.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    
    const analyticsData = {
      timestamp: new Date(startTime).toISOString(),
      endpoint: request.nextUrl.pathname,
      method: request.method,
      statusCode,
      responseTime,
      clientId: accessToken?.clientId,
      userId: accessToken?.userId,
      mcpServerId,
      ssoProvider,
      userRole: undefined, // Would extract from JWT claims
      scopes: [], // Would extract from access token scopes
      organization,
      ipAddress: getClientIP(request),
      userAgent: request.headers.get('user-agent') || '',
      mcpMethod,
      toolName
    };

    await fetch(`${baseUrl}/api/analytics/collect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analyticsData)
    }).catch(() => {
      // Silent fail - analytics shouldn't break MCP requests
    });
    
  } catch (error) {
    console.warn('Enhanced analytics logging failed:', error);
  }
}

// MCP handler with authentication
const handler = async (req: Request) => {
  const startTime = Date.now();
  
  // Inject authentication here
  const nextReq = req as unknown as NextRequest; // for type compatibility
  const accessToken = await authenticateRequest(nextReq);
  if (!accessToken) {
    // Log failed authentication analytics
    await logEnhancedAnalytics(nextReq, null, null, startTime, 401);
    
    // Get host for WWW-Authenticate header
    const host = nextReq.headers.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}`;
    
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        // Required WWW-Authenticate header for MCP discovery
        'WWW-Authenticate': `Bearer realm="${baseUrl}", resource_metadata="${baseUrl}/.well-known/oauth-protected-resource"`
      },
    });
  }

  // Log request body for analytics
  const requestBody = await req.clone().json().catch(() => null);
  console.log('[MCP] Request body:', requestBody);

  // Execute MCP handler and capture response
  const mcpResponse = await createMcpHandler(
    (server) => {
      server.tool(
        "add_numbers",
        "Adds two numbers together and returns the sum",
        {
          a: z.number().describe("First number to add"),
          b: z.number().describe("Second number to add"),
        },
        async ({ a, b }) => {
          return {
            content: [
              {
                type: "text",
                text: `The sum of ${a} and ${b} is ${a + b}`,
              },
            ],
          };
        }
      );
    },
    {
      // Optionally add server capabilities here
    },
    {
      basePath: "/mcp",
      verboseLogs: true,
      redisUrl: process.env.REDIS_URL,
    }
  )(req);
  
  // Log successful analytics after response
  const statusCode = mcpResponse.status || 200;
  await logEnhancedAnalytics(nextReq, accessToken, requestBody, startTime, statusCode);
  
  return mcpResponse;
};

export { handler as GET, handler as POST };

// CORS preflight handler
export async function OPTIONS() {
  const response = new Response(null, { status: 200 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
} 
