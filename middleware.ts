import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Utility function for Edge Runtime
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

export async function middleware(request: NextRequest) {
  const startTime = Date.now();
  const pathname = request.nextUrl.pathname;
  
  // Only collect analytics for MCP endpoints
  const shouldCollectAnalytics = pathname.startsWith('/mcp/');
  
  // Let the request proceed
  const response = NextResponse.next();
  
  // Enhanced analytics collection for MCP endpoints with security monitoring
  if (shouldCollectAnalytics) {
    Promise.resolve().then(async () => {
      try {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        const ip = getClientIP(request);
        const userAgent = request.headers.get('user-agent') || '';
        
        // Extract enhanced context from auth header
        let clientId: string | undefined;
        let userId: string | undefined;
        let ssoProvider: string | undefined;
        let userRole: string | undefined;
        let scopes: string[] = [];
        let organization: string | undefined;
        
        const authHeader = request.headers.get('authorization');
        if (authHeader?.startsWith('Bearer ')) {
          // In production, decode JWT to extract claims
          // For now, we'll extract what we can from request context
          ssoProvider = 'google'; // Default, would be extracted from JWT
        }
        
        // Determine MCP server context
        let mcpServerId: string | undefined;
        let mcpMethod: string | undefined;
        let toolName: string | undefined;
        
        // Extract from request path/body if available
        if (pathname.includes('/mcp/')) {
          // This would be more sophisticated in practice
          mcpMethod = request.method === 'POST' ? 'tools/call' : 'tools/list';
        }
        
        // Enhanced analytics data with enterprise context
        const analyticsData = {
          timestamp: new Date(startTime).toISOString(),
          endpoint: pathname,
          method: request.method,
          statusCode: response.status,
          responseTime,
          clientId,
          userId,
          mcpServerId,
          ssoProvider,
          userRole,
          scopes,
          organization,
          ipAddress: ip,
          userAgent,
          mcpMethod,
          toolName
        };

        // Make a fetch call to our analytics API endpoint
        const host = request.headers.get('host');
        const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
        const baseUrl = `${protocol}://${host}`;
        
        await fetch(`${baseUrl}/api/analytics/collect`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(analyticsData)
        }).catch(() => {
          // Silent fail - analytics shouldn't break the main request
        });
        
        // Security monitoring for suspicious activity
        if (response.status >= 400 || ip !== '127.0.0.1') {
          await fetch(`${baseUrl}/api/analytics/security`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              context: {
                userId,
                clientId,
                ipAddress: ip,
                userAgent,
                endpoint: pathname,
                organization,
                ssoProvider,
                mcpServerId
              },
              request: {
                method: request.method,
                statusCode: response.status,
                authHeader: authHeader ? 'present' : 'missing'
              }
            })
          }).catch(() => {
            // Silent fail - security monitoring shouldn't break requests
          });
        }
        
      } catch (error) {
        console.warn('Analytics collection failed:', error);
      }
    });
  }
  
  return response;
}

export const config = {
  matcher: [
    // Only match MCP endpoints for analytics collection
    '/mcp/:path*',
  ],
};