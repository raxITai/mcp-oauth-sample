import { NextRequest } from 'next/server';
import { prisma } from '../app/prisma';
import { SecurityEventType } from '@/generated/prisma';

interface SecurityContext {
  userId?: string;
  clientId?: string;
  ipAddress: string;
  userAgent: string;
  endpoint: string;
  organization?: string;
  ssoProvider?: string;
  mcpServerId?: string;
}

interface SecurityEvent {
  eventType: SecurityEventType;
  severity: 'low' | 'medium' | 'high' | 'critical';
  details: Record<string, unknown>;
  riskScore: number;
}

class SecurityMonitor {
  private readonly RATE_LIMIT_WINDOW = 60000; // 1 minute
  private readonly MAX_REQUESTS_PER_MINUTE = 30;
  private readonly SUSPICIOUS_USER_AGENTS = [
    'bot', 'crawler', 'spider', 'scraper', 'curl', 'wget'
  ];
  // Known VPN ranges for future use
  // private readonly KNOWN_VPN_RANGES = [
  //   '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16'
  // ];

  // Real-time threat detection
  async detectThreats(context: SecurityContext, request?: NextRequest): Promise<SecurityEvent[]> {
    const events: SecurityEvent[] = [];

    // 1. Rate limiting detection
    const rateLimitEvent = await this.checkRateLimit(context);
    if (rateLimitEvent) events.push(rateLimitEvent);

    // 2. Suspicious user agent
    const userAgentEvent = this.checkSuspiciousUserAgent(context);
    if (userAgentEvent) events.push(userAgentEvent);

    // 3. Geolocation anomalies
    const locationEvent = await this.checkUnusualLocation(context);
    if (locationEvent) events.push(locationEvent);

    // 4. Token reuse detection
    if (request) {
      const tokenEvent = await this.checkTokenReuse(context, request);
      if (tokenEvent) events.push(tokenEvent);
    }

    // 5. Privilege escalation attempts
    const privilegeEvent = await this.checkPrivilegeEscalation(context);
    if (privilegeEvent) events.push(privilegeEvent);

    // 6. Brute force detection
    const bruteForceEvent = await this.checkBruteForce(context);
    if (bruteForceEvent) events.push(bruteForceEvent);

    return events;
  }

  // Rate limiting detection
  private async checkRateLimit(context: SecurityContext): Promise<SecurityEvent | null> {
    const recentRequests = await prisma.analyticsRequest.count({
      where: {
        ipAddress: context.ipAddress,
        timestamp: {
          gte: new Date(Date.now() - this.RATE_LIMIT_WINDOW)
        }
      }
    });

    if (recentRequests > this.MAX_REQUESTS_PER_MINUTE) {
      return {
        eventType: SecurityEventType.RATE_LIMIT_EXCEEDED,
        severity: 'medium',
        details: {
          requestCount: recentRequests,
          limit: this.MAX_REQUESTS_PER_MINUTE,
          timeWindow: this.RATE_LIMIT_WINDOW
        },
        riskScore: Math.min(80, 20 + (recentRequests - this.MAX_REQUESTS_PER_MINUTE) * 2)
      };
    }

    return null;
  }

  // Suspicious user agent detection
  private checkSuspiciousUserAgent(context: SecurityContext): SecurityEvent | null {
    const userAgent = context.userAgent.toLowerCase();
    const suspiciousPattern = this.SUSPICIOUS_USER_AGENTS.find(pattern => 
      userAgent.includes(pattern)
    );

    if (suspiciousPattern && !userAgent.includes('mcp')) {
      return {
        eventType: SecurityEventType.SUSPICIOUS_ACTIVITY,
        severity: 'low',
        details: {
          userAgent: context.userAgent,
          detectedPattern: suspiciousPattern,
          reason: 'Non-human user agent detected'
        },
        riskScore: 30
      };
    }

    return null;
  }

  // Unusual location detection
  private async checkUnusualLocation(context: SecurityContext): Promise<SecurityEvent | null> {
    if (!context.userId) return null;

    // Get user's recent locations
    const recentLocations = await prisma.analyticsRequest.findMany({
      where: {
        userId: context.userId,
        country: { not: null },
        timestamp: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
        }
      },
      select: { country: true, city: true },
      distinct: ['country', 'city'],
      take: 10
    });

    // If user has established locations and current request is from new location
    if (recentLocations.length > 0) {
      // This would need actual geolocation lookup - simplified for demo
      const currentCountry = 'Unknown'; // Get from IP geolocation
      
      const isNewLocation = !recentLocations.some(loc => 
        loc.country === currentCountry
      );

      if (isNewLocation) {
        return {
          eventType: SecurityEventType.UNUSUAL_LOCATION,
          severity: 'medium',
          details: {
            currentLocation: { country: currentCountry },
            previousLocations: recentLocations,
            reason: 'Access from unusual geographic location'
          },
          riskScore: 60
        };
      }
    }

    return null;
  }

  // Token reuse detection
  private async checkTokenReuse(context: SecurityContext, request: NextRequest): Promise<SecurityEvent | null> {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) return null;

    // Token could be used for duplicate detection
    // const token = authHeader.slice(7);

    // Check if this token was used from a different IP recently
    const recentUsage = await prisma.analyticsRequest.findFirst({
      where: {
        userId: context.userId,
        timestamp: {
          gte: new Date(Date.now() - 5 * 60 * 1000) // Last 5 minutes
        },
        ipAddress: { not: context.ipAddress }
      },
      orderBy: { timestamp: 'desc' }
    });

    if (recentUsage) {
      return {
        eventType: SecurityEventType.TOKEN_REUSE,
        severity: 'high',
        details: {
          currentIP: context.ipAddress,
          previousIP: recentUsage.ipAddress,
          timeDifference: Date.now() - recentUsage.timestamp.getTime(),
          reason: 'Same token used from different IP addresses'
        },
        riskScore: 85
      };
    }

    return null;
  }

  // Privilege escalation detection
  private async checkPrivilegeEscalation(context: SecurityContext): Promise<SecurityEvent | null> {
    if (!context.userId) return null;

    // Check if user is trying to access resources above their usual scope
    const recentScopes = await prisma.analyticsRequest.findMany({
      where: {
        userId: context.userId,
        timestamp: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
        }
      },
      select: { scopes: true },
      take: 50
    });

    // This would analyze scope patterns - simplified for demo
    const hasUnusualScopes = false; // Implement scope analysis logic

    if (hasUnusualScopes) {
      return {
        eventType: SecurityEventType.PRIVILEGE_ESCALATION,
        severity: 'critical',
        details: {
          currentScopes: [], // Would contain actual scopes
          historicalScopes: recentScopes.filter(r => r.scopes).map(r => r.scopes),
          reason: 'Attempt to access elevated privileges'
        },
        riskScore: 95
      };
    }

    return null;
  }

  // Brute force detection
  private async checkBruteForce(context: SecurityContext): Promise<SecurityEvent | null> {
    // Check for multiple failed auth attempts
    const failedAttempts = await prisma.analyticsSecurity.count({
      where: {
        ipAddress: context.ipAddress,
        eventType: SecurityEventType.AUTH_FAILURE,
        timestamp: {
          gte: new Date(Date.now() - 15 * 60 * 1000) // Last 15 minutes
        }
      }
    });

    if (failedAttempts >= 5) {
      return {
        eventType: SecurityEventType.BRUTE_FORCE_ATTEMPT,
        severity: 'high',
        details: {
          failedAttempts,
          timeWindow: '15 minutes',
          reason: 'Multiple authentication failures from same IP'
        },
        riskScore: 90
      };
    }

    return null;
  }

  // Log security events to database
  async logSecurityEvents(events: SecurityEvent[], context: SecurityContext): Promise<void> {
    if (events.length === 0) return;

    await prisma.analyticsSecurity.createMany({
      data: events.map(event => ({
        eventType: event.eventType,
        severity: event.severity,
        userId: context.userId,
        clientId: context.clientId,
        mcpServerId: context.mcpServerId,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        endpoint: context.endpoint,
        organization: context.organization,
        ssoProvider: context.ssoProvider,
        details: JSON.parse(JSON.stringify(event.details)),
        riskScore: event.riskScore
      }))
    });

    // Trigger alerts for high-risk events
    await this.triggerAlertsIfNeeded(events, context);
  }

  // Alert system for critical events
  private async triggerAlertsIfNeeded(events: SecurityEvent[], context: SecurityContext): Promise<void> {
    const criticalEvents = events.filter(e => 
      e.severity === 'critical' || e.riskScore >= 90
    );

    if (criticalEvents.length > 0) {
      // Implement alerting logic here:
      // - Send to SIEM
      // - Slack notifications
      // - Email alerts
      // - Auto-block suspicious IPs
      console.warn('CRITICAL SECURITY EVENT:', {
        events: criticalEvents,
        context
      });
    }
  }

  // Authentication failure tracking
  async logAuthFailure(context: SecurityContext, reason: string): Promise<void> {
    await this.logSecurityEvents([{
      eventType: SecurityEventType.AUTH_FAILURE,
      severity: 'medium',
      details: { reason, timestamp: new Date() },
      riskScore: 50
    }], context);
  }

  // Token validation failure
  async logInvalidToken(context: SecurityContext, tokenDetails: Record<string, unknown>): Promise<void> {
    await this.logSecurityEvents([{
      eventType: SecurityEventType.INVALID_TOKEN,
      severity: 'medium',
      details: { tokenDetails, timestamp: new Date() },
      riskScore: 60
    }], context);
  }

  // Utility functions (commented out to avoid unused warnings)
  // private hashToken(token: string): string {
  //   // Simple hash for demo - use proper crypto in production
  //   return Buffer.from(token).toString('base64').slice(0, 16);
  // }
}

export const securityMonitor = new SecurityMonitor();
export type { SecurityContext, SecurityEvent };