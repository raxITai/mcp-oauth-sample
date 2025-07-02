import { NextRequest, NextResponse } from 'next/server';
import { analyticsDB } from '@/lib/analytics-db';

export async function POST(request: NextRequest) {
  try {
    // This endpoint runs in Node.js runtime and can use Prisma
    const analyticsData = await request.json();
    
    // Validate the data structure
    if (!analyticsData.timestamp || !analyticsData.endpoint || !analyticsData.method) {
      return NextResponse.json({ error: 'Invalid analytics data' }, { status: 400 });
    }

    // Convert ISO string back to Date object and add enhanced fields
    const requestData = {
      ...analyticsData,
      timestamp: new Date(analyticsData.timestamp),
      // Handle arrays properly
      scopes: analyticsData.scopes || [],
      // Ensure required fields have defaults
      statusCode: analyticsData.statusCode || 200,
      responseTime: analyticsData.responseTime || 0,
      ipAddress: analyticsData.ipAddress || '127.0.0.1',
      userAgent: analyticsData.userAgent || 'unknown'
    };

    // Log the request using our optimized analytics system
    await analyticsDB.logRequest(requestData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics collection error:', error);
    // Return success anyway - analytics shouldn't break the app
    return NextResponse.json({ success: true });
  }
}