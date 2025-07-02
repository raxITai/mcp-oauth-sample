import { NextRequest, NextResponse } from 'next/server';
import { analyticsDB, getSecurityAnalytics } from '@/lib/analytics-db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    
    // Calculate date range
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - days * 24 * 60 * 60 * 1000);
    
    const analytics = await getSecurityAnalytics(startDate, endDate);
    
    return NextResponse.json({
      success: true,
      data: analytics,
      timeRange: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        days
      }
    });
  } catch (error) {
    console.error('Security analytics API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch security analytics',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

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