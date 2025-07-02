import { NextRequest, NextResponse } from 'next/server';
import { securityMonitor } from '@/lib/security-monitor';
import { prisma } from '@/app/prisma';

export async function POST(request: NextRequest) {
  try {
    const { eventType, count = 1 } = await request.json();
    
    // Only include event types that we actually detect in security-monitor.ts
    const validEventTypes = [
      'AUTH_FAILURE',           // logAuthFailure()
      'INVALID_TOKEN',          // logInvalidToken() & checkTokenAudienceViolation()
      'SUSPICIOUS_ACTIVITY',    // checkSuspiciousUserAgent() & checkTokenPassthrough()
      'RATE_LIMIT_EXCEEDED',    // checkRateLimit()
      'TOKEN_REUSE',            // checkTokenReuse()
      'UNUSUAL_LOCATION',       // checkUnusualLocation() (currently disabled)
      'PRIVILEGE_ESCALATION',   // checkPrivilegeEscalation()
      'BRUTE_FORCE_ATTEMPT',    // checkBruteForce()
      'OAUTH_INVALID_CLIENT',   // checkPKCEBypass()
      'OAUTH_INVALID_GRANT'     // checkMissingResourceParameter()
    ];

    if (!validEventTypes.includes(eventType)) {
      return NextResponse.json({ 
        error: 'Invalid event type',
        validTypes: validEventTypes
      }, { status: 400 });
    }

    // Get real data from database instead of using fake IDs
    const recentUser = await prisma.user.findFirst({
      select: { id: true }
    });
    
    const recentClient = await prisma.client.findFirst({
      orderBy: { createdAt: 'desc' },
      select: { id: true }
    });
    
    const recentMCPServer = await prisma.mCPServer.findFirst({
      select: { id: true }
    });

    const mockContext = {
      userId: recentUser?.id, // Use real user ID or undefined
      clientId: recentClient?.id, // Use real client ID or undefined
      ipAddress: request.headers.get('x-forwarded-for') || '127.0.0.1',
      userAgent: request.headers.get('user-agent') || 'Test Agent',
      endpoint: '/test/security-events',
      organization: 'Test Organization',
      ssoProvider: 'google',
      mcpServerId: recentMCPServer?.id // Use real MCP server ID or undefined
    };

    const events = [];
    for (let i = 0; i < count; i++) {
      const mockEvent = {
        eventType: eventType as 'AUTH_FAILURE' | 'INVALID_TOKEN' | 'SUSPICIOUS_ACTIVITY' | 'RATE_LIMIT_EXCEEDED' | 'TOKEN_REUSE' | 'UNUSUAL_LOCATION' | 'PRIVILEGE_ESCALATION' | 'BRUTE_FORCE_ATTEMPT' | 'OAUTH_INVALID_CLIENT' | 'OAUTH_INVALID_GRANT',
        severity: getSeverityForEventType(eventType),
        details: {
          test: true,
          eventNumber: i + 1,
          timestamp: new Date(),
          description: getDescriptionForEventType(eventType),
          ...getRealisticDetailsForEventType(eventType, i)
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
    case 'OAUTH_INVALID_CLIENT':        // PKCE bypass - critical OAuth 2.1 violation
      return 'critical';
    case 'TOKEN_REUSE':
    case 'BRUTE_FORCE_ATTEMPT':
    case 'OAUTH_INVALID_GRANT':         // Missing resource parameter - high risk
      return 'high';
    case 'RATE_LIMIT_EXCEEDED':
    case 'INVALID_TOKEN':               // Token audience violations
    case 'AUTH_FAILURE':
    case 'UNUSUAL_LOCATION':
      return 'medium';
    case 'SUSPICIOUS_ACTIVITY':         // User agent detection & token passthrough
      return 'low';
    default:
      return 'low';
  }
}

function getRiskScoreForEventType(eventType: string): number {
  switch (eventType) {
    case 'PRIVILEGE_ESCALATION': return 95;       // Critical - elevated scope access
    case 'INVALID_TOKEN': return 95;              // Critical - token audience violations
    case 'OAUTH_INVALID_CLIENT': return 90;       // Critical - PKCE bypass
    case 'BRUTE_FORCE_ATTEMPT': return 90;        // High - credential attacks
    case 'TOKEN_REUSE': return 85;                // High - token theft
    case 'SUSPICIOUS_ACTIVITY': return 85;        // High - token passthrough (when from that)
    case 'OAUTH_INVALID_GRANT': return 80;        // High - missing resource parameter
    case 'UNUSUAL_LOCATION': return 60;           // Medium - geographic anomaly (disabled)
    case 'RATE_LIMIT_EXCEEDED': return 60;        // Medium - API abuse
    case 'AUTH_FAILURE': return 50;               // Medium - auth issues
    default: return 25;
  }
}

function getDescriptionForEventType(eventType: string): string {
  switch (eventType) {
    case 'AUTH_FAILURE': return 'Authentication failure event - failed login attempt';
    case 'INVALID_TOKEN': return 'Token audience validation failure - token used across MCP server boundaries';
    case 'SUSPICIOUS_ACTIVITY': return 'Suspicious user agent detected or rapid cross-server access pattern (token passthrough)';
    case 'RATE_LIMIT_EXCEEDED': return 'Rate limit exceeded - more than 30 requests per minute from single IP';
    case 'TOKEN_REUSE': return 'Token reuse detection - same token used from different IP addresses';
    case 'UNUSUAL_LOCATION': return 'Unusual geographic location access (currently disabled in demo)';
    case 'PRIVILEGE_ESCALATION': return 'OAuth privilege escalation - user requesting elevated scopes beyond historical patterns';
    case 'BRUTE_FORCE_ATTEMPT': return 'Brute force attack - multiple authentication failures from same IP';
    case 'OAUTH_INVALID_CLIENT': return 'OAuth PKCE bypass attempt - authorization code flow without PKCE protection';
    case 'OAUTH_INVALID_GRANT': return 'OAuth missing resource parameter - requests without proper redirect URI/resource identification';
    default: return 'Security event';
  }
}

function getRealisticDetailsForEventType(eventType: string, index: number): Record<string, unknown> {
  const baseIP = `192.168.1.${100 + index}`;
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'curl/7.68.0',
    'python-requests/2.28.1',
    'PostmanRuntime/7.29.2'
  ];

  switch (eventType) {
    case 'AUTH_FAILURE':
      return {
        reason: 'Invalid credentials provided',
        attemptedUsername: `user${index}@example.com`,
        failureCount: Math.floor(Math.random() * 5) + 1
      };

    case 'INVALID_TOKEN':
      return {
        mcpServers: [`server-${index}-a`, `server-${index}-b`],
        currentEndpoint: '/mcp/sse',
        reason: 'Access token used across multiple MCP server boundaries (audience violation)'
      };

    case 'SUSPICIOUS_ACTIVITY':
      return Math.random() > 0.5 ? {
        // User agent detection
        userAgent: userAgents[1], // curl
        detectedPattern: 'curl',
        reason: 'Non-human user agent detected'
      } : {
        // Token passthrough
        serverChanges: [
          { fromServer: `server-${index}-1`, toServer: `server-${index}-2`, timeDiffMs: 2000 }
        ],
        reason: 'Rapid cross-MCP server access pattern suggests potential token passthrough'
      };

    case 'RATE_LIMIT_EXCEEDED':
      return {
        requestCount: 35 + Math.floor(Math.random() * 10),
        limit: 30,
        timeWindow: 60000,
        endpoint: '/mcp/sse'
      };

    case 'TOKEN_REUSE':
      return {
        currentIP: baseIP,
        previousIP: `10.0.0.${50 + index}`,
        timeDifference: Math.floor(Math.random() * 300000), // Up to 5 minutes
        reason: 'Same token used from different IP addresses'
      };

    case 'UNUSUAL_LOCATION':
      return {
        currentLocation: { country: 'Unknown' },
        previousLocations: [
          { country: 'United States', city: 'San Francisco' },
          { country: 'United States', city: 'New York' }
        ],
        reason: 'Access from unusual geographic location'
      };

    case 'PRIVILEGE_ESCALATION':
      return Math.random() > 0.5 ? {
        // Elevated scopes
        currentScopes: ['read', 'write', 'admin', 'delete'],
        newElevatedScopes: ['admin', 'delete'],
        historicalScopeCount: 2,
        reason: 'User attempting to access elevated OAuth scopes not previously granted'
      } : {
        // Scope explosion
        currentScopes: ['read', 'write', 'manage', 'config', 'system'],
        newScopes: ['manage', 'config', 'system'],
        historicalScopeCount: 2,
        reason: 'Unusual number of new OAuth scopes requested'
      };

    case 'BRUTE_FORCE_ATTEMPT':
      return {
        failedAttempts: 5 + Math.floor(Math.random() * 5),
        timeWindow: '15 minutes',
        reason: 'Multiple authentication failures from same IP'
      };

    case 'OAUTH_INVALID_CLIENT':
      return {
        nonPKCECount: Math.floor(Math.random() * 3) + 1,
        totalRequests: Math.floor(Math.random() * 5) + 2,
        reason: 'Authorization code flow without PKCE protection (OAuth 2.1 violation)'
      };

    case 'OAUTH_INVALID_GRANT':
      return {
        missingRedirectCount: Math.floor(Math.random() * 2) + 1,
        grantTypes: ['authorization_code', 'refresh_token'][Math.floor(Math.random() * 2)],
        reason: 'OAuth requests missing required redirect URI (potential resource parameter missing)'
      };

    default:
      return {};
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Security Event Generator API',
    usage: 'POST with { "eventType": "AUTH_FAILURE", "count": 5 }',
    availableEventTypes: [
      'AUTH_FAILURE',           // Authentication failures
      'INVALID_TOKEN',          // Token audience violations (critical)
      'SUSPICIOUS_ACTIVITY',    // User agent detection & token passthrough
      'RATE_LIMIT_EXCEEDED',    // API abuse detection
      'TOKEN_REUSE',            // Cross-IP token usage
      'UNUSUAL_LOCATION',       // Geographic anomalies (disabled)
      'PRIVILEGE_ESCALATION',   // OAuth scope escalation (critical)
      'BRUTE_FORCE_ATTEMPT',    // Credential attacks
      'OAUTH_INVALID_CLIENT',   // PKCE bypass attempts (critical)
      'OAUTH_INVALID_GRANT'     // Missing resource parameters
    ]
  });
}