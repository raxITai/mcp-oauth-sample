import { NextRequest, NextResponse } from 'next/server';
import { analyticsDB } from '@/lib/analytics-db';
import { auth } from '@/app/auth';

export async function GET(request: NextRequest) {
  try {
    // Authentication check
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get analytics parameters
    const { searchParams } = new URL(request.url);
    const hours = parseInt(searchParams.get('hours') || '24');
    
    return getEnhancedAnalytics(hours);
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

// Database-backed analytics system
async function getEnhancedAnalytics(hours = 24) {
  try {
    // Validate hours parameter
    if (hours < 1 || hours > 168) { // Max 7 days
      return NextResponse.json({ error: 'Hours must be between 1 and 168' }, { status: 400 });
    }

    // Efficient parallel queries for enhanced analytics
    const [performance, endpoints, geography, securityEvents] = await Promise.all([
      analyticsDB.getPerformanceMetrics(hours),
      analyticsDB.getTopEndpoints(hours, 10),
      analyticsDB.getGeographyStats(hours),
      analyticsDB.getSecurityEvents(hours)
    ]);

    const data = {
      performance,
      topEndpoints: endpoints,
      geography,
      security: {
        events: securityEvents,
        eventCount: securityEvents.length
      },
      timeRange: `${hours} hours`,
      lastUpdated: new Date().toISOString()
    };

    const response = NextResponse.json(data);
    
    // Set cache headers for performance
    response.headers.set(
      'Cache-Control',
      'private, max-age=30, must-revalidate'
    );

    return response;

  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}