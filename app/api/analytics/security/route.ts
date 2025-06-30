import { NextRequest, NextResponse } from 'next/server';
import { analyticsDB } from '@/lib/analytics-db';

export async function POST(request: NextRequest) {
  try {
    // This endpoint runs in Node.js runtime and can use Prisma
    const securityData = await request.json();
    
    // Validate the data structure
    if (!securityData.timestamp || !securityData.eventType || !securityData.ipAddress) {
      return NextResponse.json({ error: 'Invalid security data' }, { status: 400 });
    }

    // Convert ISO string back to Date object
    const eventData = {
      ...securityData,
      timestamp: new Date(securityData.timestamp)
    };

    // Log the security event using our optimized analytics system
    await analyticsDB.logSecurityEvent(eventData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Security event logging error:', error);
    // Return success anyway - security logging shouldn't break the app
    return NextResponse.json({ success: true });
  }
}