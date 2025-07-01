import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/app/prisma';
import { randomBytes } from 'crypto';
import { analyticsDB } from '@/lib/analytics-db';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { client_name, redirect_uris } = body;

  if (!client_name || !redirect_uris) {
    const response = NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    );
    
    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  }

  const clientSecret = randomBytes(32).toString('hex');

  try {
    const newClient = await prisma.client.create({
      data: {
        name: client_name,
        redirectUris: redirect_uris,
        clientSecret: clientSecret, // This should be hashed in a real app
        userId: null, // Allow unauthenticated clients
      },
    });

    // Log client registration analytics
    try {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                 request.headers.get('x-real-ip') || 
                 '127.0.0.1';
      
      await analyticsDB.logRequest({
        timestamp: new Date(),
        endpoint: '/api/oauth/register',
        method: request.method,
        statusCode: 200,
        responseTime: 0,
        clientId: newClient.id,
        ipAddress: ip,
        userAgent: request.headers.get('user-agent') || '',
        oauthGrantType: 'client_registration',
        tokenScopes: [],
        redirectUri: redirect_uris[0] // First redirect URI
      });
    } catch (analyticsError) {
      console.warn('Failed to log client registration analytics:', analyticsError);
    }

    const response = NextResponse.json({
      client_id: newClient.clientId,
      client_secret: clientSecret, // This is the only time the secret is sent
      redirect_uris: redirect_uris,
    });
    
    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  } catch (e) {
    console.error(e);
    const response = NextResponse.json(
      { error: 'Error creating client' },
      { status: 500 },
    );
    
    // Add CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  }
}

export async function OPTIONS() {
  const response = new NextResponse("OK", { status: 200 });
  
  // Add CORS headers for preflight requests
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
} 
