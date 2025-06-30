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
  
  // Selective analytics collection for MCP endpoints only
  if (shouldCollectAnalytics) {
    Promise.resolve().then(async () => {
      try {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        const ip = getClientIP(request);
        const userAgent = request.headers.get('user-agent') || '';
        
        // Extract client/user info if available from auth header
        let clientId: string | undefined;
        let userId: string | undefined;
        
        // Send analytics data to our API endpoint (Edge Runtime compatible)
        const analyticsData = {
          timestamp: new Date(startTime).toISOString(),
          endpoint: pathname,
          method: request.method,
          statusCode: response.status,
          responseTime,
          clientId,
          userId,
          ipAddress: ip,
          userAgent
        };

        // Make a fetch call to our analytics API endpoint
        // This runs in Edge Runtime and sends data to Node.js runtime
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