import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { analyticsCollector, extractClientInfo, getLocationFromIP, getClientIP } from './lib/analytics';

export async function middleware(request: NextRequest) {
  const startTime = Date.now();
  
  // Let the request proceed
  const response = NextResponse.next();
  
  // Collect analytics data after response (non-blocking)
  // Use setImmediate equivalent for Next.js
  Promise.resolve().then(async () => {
    try {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      const ip = getClientIP(request);
      const userAgent = request.headers.get('user-agent') || '';
      const { clientType, platform } = extractClientInfo(userAgent);
      
      // Get geographic info (async, non-blocking)
      const location = await getLocationFromIP(ip);
      
      // Extract client/user info if available from auth header
      let clientId: string | undefined;
      let userId: string | undefined;
      
      // If this is an authenticated request, we could extract client info
      // For now, we'll leave it undefined and handle it in specific endpoints
      
      analyticsCollector.logRequest({
        timestamp: new Date(startTime),
        endpoint: request.nextUrl.pathname,
        method: request.method,
        clientId,
        userId,
        ipAddress: ip,
        userAgent,
        responseTime,
        statusCode: response.status,
        country: location.country,
        city: location.city,
        clientType,
        platform
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