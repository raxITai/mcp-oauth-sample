import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";
import { prisma } from '@/app/prisma';
import { NextRequest } from 'next/server';
import { analyticsDB, getClientIP } from '@/lib/analytics-db';

// Authentication helper
async function authenticateRequest(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  
  console.log('[MCP] Auth header present:', !!authHeader);
  
  if (!authHeader) {
    console.log('[MCP] No auth header, returning 401');
    
    // Log security event for missing auth
    analyticsDB.logSecurityEvent({
      timestamp: new Date(),
      eventType: 'auth_failure',
      ipAddress: ip,
      userAgent,
      details: 'Missing authorization header'
    });
    
    return null;
  }

  const token = authHeader.split(' ')[1];
  console.log('[MCP] Token extracted:', token ? 'present' : 'missing');
  
  if (!token) {
    console.log('[MCP] No token, returning 401');
    
    // Log security event for malformed auth header
    analyticsDB.logSecurityEvent({
      timestamp: new Date(),
      eventType: 'auth_failure',
      ipAddress: ip,
      userAgent,
      details: 'Malformed authorization header'
    });
    
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
      analyticsDB.logSecurityEvent({
        timestamp: new Date(),
        eventType: 'invalid_token',
        ipAddress: ip,
        userAgent,
        details: 'Invalid access token provided'
      });
      
      return null;
    }

    console.log('[MCP] Token expires at:', accessToken.expiresAt);
    console.log('[MCP] Current time:', new Date());
    
    if (accessToken.expiresAt < new Date()) {
      console.log('[MCP] Token expired, returning 401');
      
      // Log security event for expired token
      analyticsDB.logSecurityEvent({
        timestamp: new Date(),
        eventType: 'invalid_token',
        ipAddress: ip,
        userAgent,
        clientId: accessToken.clientId,
        details: 'Expired access token used'
      });
      
      return null;
    }

    // Validate token audience - critical security requirement
    const host = request.headers.get('host');
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
    const currentResource = `${protocol}://${host}`;
    
    if (accessToken.resource && accessToken.resource !== currentResource) {
      console.log('[MCP] Token audience mismatch. Expected:', currentResource, 'Got:', accessToken.resource);
      
      // Log security event for audience mismatch
      analyticsDB.logSecurityEvent({
        timestamp: new Date(),
        eventType: 'suspicious_activity',
        ipAddress: ip,
        userAgent,
        clientId: accessToken.clientId,
        details: `Token audience mismatch. Expected: ${currentResource}, Got: ${accessToken.resource}`
      });
      
      return null;
    }

    console.log('[MCP] Authentication successful, audience validated');
    return accessToken;
  } catch (e) {
    console.error('[MCP] Error validating token:', e);
    
    // Log security event for authentication error
    analyticsDB.logSecurityEvent({
      timestamp: new Date(),
      eventType: 'auth_failure',
      ipAddress: ip,
      userAgent,
      details: `Authentication error: ${e instanceof Error ? e.message : 'Unknown error'}`
    });
    
    return null;
  }
}

// MCP handler with authentication
const handler = async (req: Request) => {
  // Inject authentication here
  const nextReq = req as unknown as NextRequest; // for type compatibility
  const accessToken = await authenticateRequest(nextReq);
  if (!accessToken) {
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

  // Log request body
  const requestBody = await req.clone().json().catch(() => null);
  console.log('[MCP] Request body:', requestBody);

  return createMcpHandler(
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
