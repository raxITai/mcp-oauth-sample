import { NextRequest, NextResponse } from 'next/server';
import { securityMonitor } from '@/lib/security-monitor';

export async function POST(request: NextRequest) {
  try {
    const { eventType, count = 1 } = await request.json();
    
    const validEventTypes = [
      'AUTH_FAILURE',
      'INVALID_TOKEN', 
      'SUSPICIOUS_ACTIVITY',
      'RATE_LIMIT_EXCEEDED',
      'UNAUTHORIZED_ACCESS',
      'TOKEN_REUSE',
      'UNUSUAL_LOCATION',
      'PRIVILEGE_ESCALATION',
      'MALFORMED_REQUEST',
      'BRUTE_FORCE_ATTEMPT'
    ];

    if (!validEventTypes.includes(eventType)) {
      return NextResponse.json({ 
        error: 'Invalid event type',
        validTypes: validEventTypes
      }, { status: 400 });
    }

    const mockContext = {
      userId: undefined, // Don't use fake userId that doesn't exist in database
      clientId: 'test-client-456',
      ipAddress: request.headers.get('x-forwarded-for') || '127.0.0.1',
      userAgent: request.headers.get('user-agent') || 'Test Agent',
      endpoint: '/test/security-events',
      organization: 'Test Organization',
      ssoProvider: 'google',
      mcpServerId: 'test-mcp-server'
    };

    const events = [];
    for (let i = 0; i < count; i++) {
      const mockEvent = {
        eventType: eventType as 'AUTH_FAILURE' | 'INVALID_TOKEN' | 'SUSPICIOUS_ACTIVITY' | 'RATE_LIMIT_EXCEEDED' | 'UNAUTHORIZED_ACCESS' | 'TOKEN_REUSE' | 'UNUSUAL_LOCATION' | 'PRIVILEGE_ESCALATION' | 'MALFORMED_REQUEST' | 'BRUTE_FORCE_ATTEMPT',
        severity: getSeverityForEventType(eventType),
        details: {
          test: true,
          eventNumber: i + 1,
          timestamp: new Date(),
          description: getDescriptionForEventType(eventType)
        },
        riskScore: getRiskScoreForEventType(eventType)
      };
      events.push(mockEvent);
    }

    await securityMonitor.logSecurityEvents(events, mockContext);

    return NextResponse.json({ 
      success: true,
      message: `Generated ${count} ${eventType} event(s)`,
      events: events.length
    });

  } catch (error) {
    console.error('Test security event generation error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate security events',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

function getSeverityForEventType(eventType: string): 'low' | 'medium' | 'high' | 'critical' {
  switch (eventType) {
    case 'PRIVILEGE_ESCALATION':
    case 'BRUTE_FORCE_ATTEMPT':
      return 'critical';
    case 'TOKEN_REUSE':
    case 'UNUSUAL_LOCATION':
    case 'UNAUTHORIZED_ACCESS':
      return 'high';
    case 'RATE_LIMIT_EXCEEDED':
    case 'INVALID_TOKEN':
    case 'AUTH_FAILURE':
      return 'medium';
    default:
      return 'low';
  }
}

function getRiskScoreForEventType(eventType: string): number {
  switch (eventType) {
    case 'PRIVILEGE_ESCALATION': return 95;
    case 'BRUTE_FORCE_ATTEMPT': return 90;
    case 'TOKEN_REUSE': return 85;
    case 'UNUSUAL_LOCATION': return 70;
    case 'UNAUTHORIZED_ACCESS': return 75;
    case 'RATE_LIMIT_EXCEEDED': return 60;
    case 'INVALID_TOKEN': return 50;
    case 'AUTH_FAILURE': return 45;
    case 'SUSPICIOUS_ACTIVITY': return 40;
    case 'MALFORMED_REQUEST': return 30;
    default: return 25;
  }
}

function getDescriptionForEventType(eventType: string): string {
  switch (eventType) {
    case 'AUTH_FAILURE': return 'Test authentication failure event';
    case 'INVALID_TOKEN': return 'Test invalid token usage';
    case 'SUSPICIOUS_ACTIVITY': return 'Test suspicious activity detection';
    case 'RATE_LIMIT_EXCEEDED': return 'Test rate limiting trigger';
    case 'UNAUTHORIZED_ACCESS': return 'Test unauthorized access attempt';
    case 'TOKEN_REUSE': return 'Test token reuse from different IP';
    case 'UNUSUAL_LOCATION': return 'Test unusual geographic location';
    case 'PRIVILEGE_ESCALATION': return 'Test privilege escalation attempt';
    case 'MALFORMED_REQUEST': return 'Test malformed request detection';
    case 'BRUTE_FORCE_ATTEMPT': return 'Test brute force attack simulation';
    default: return 'Test security event';
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Security Event Generator API',
    usage: 'POST with { "eventType": "AUTH_FAILURE", "count": 5 }',
    availableEventTypes: [
      'AUTH_FAILURE',
      'INVALID_TOKEN',
      'SUSPICIOUS_ACTIVITY', 
      'RATE_LIMIT_EXCEEDED',
      'UNAUTHORIZED_ACCESS',
      'TOKEN_REUSE',
      'UNUSUAL_LOCATION',
      'PRIVILEGE_ESCALATION',
      'MALFORMED_REQUEST',
      'BRUTE_FORCE_ATTEMPT'
    ]
  });
}