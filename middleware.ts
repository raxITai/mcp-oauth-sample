import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { analyticsDB, getClientIP } from './lib/analytics-db';

export async function middleware(request: NextRequest) {
  const startTime = Date.now();
  
  // Let the request proceed
  const response = NextResponse.next();
  
  // Collect analytics data after response (optimized, non-blocking)
  Promise.resolve().then(async () => {
    try {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      const ip = getClientIP(request);
      const userAgent = request.headers.get('user-agent') || '';
      
      // Extract client/user info if available from auth header
      let clientId: string | undefined;
      let userId: string | undefined;
      
      // Quick, lightweight analytics logging with batching
      await analyticsDB.logRequest({
        timestamp: new Date(startTime),
        endpoint: request.nextUrl.pathname,
        method: request.method,
        statusCode: response.status,
        responseTime,
        clientId,
        userId,
        ipAddress: ip,
        userAgent
        // Geographic data will be enriched asynchronously
      });
    } catch (error) {
      console.warn('Analytics collection failed:', error);
    }
  });
  
  return response;
}

export const config = {
  matcher: [
    // Match all request paths except static files and images
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$).*)',
  ],
};