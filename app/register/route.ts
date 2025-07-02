import { NextRequest, NextResponse } from 'next/server';

// Redirect to the actual registration endpoint
export async function POST(request: NextRequest) {
  const host = request.headers.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const registrationUrl = `${protocol}://${host}/api/oauth/register`;
  
  // Get the request body and forward it
  const body = await request.text();
  
  // Forward the request to the actual registration endpoint
  const response = await fetch(registrationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': request.headers.get('content-type') || 'application/json',
    },
    body,
  });
  
  const data = await response.text();
  
  return new NextResponse(data, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('content-type') || 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse("OK", {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 