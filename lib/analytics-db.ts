import { NextRequest } from 'next/server';
import { prisma } from '../app/prisma';

// Enhanced interfaces for database operations
interface RequestAnalytics {
  timestamp: Date;
  endpoint: string;
  method: string;
  statusCode: number;
  responseTime: number;
  clientId?: string;
  userId?: string;
  mcpServerId?: string;
  ssoProvider?: string;
  userRole?: string;
  scopes?: string[];
  organization?: string;
  ipAddress: string;
  userAgent: string;
  country?: string;
  city?: string;
  clientType?: string;
  platform?: string;
  mcpMethod?: string;
  toolName?: string;
  oauthGrantType?: string;
  tokenScopes?: string[];
  usePKCE?: boolean;
  redirectUri?: string;
}

interface SecurityEvent {
  timestamp: Date;
  eventType: 'auth_failure' | 'invalid_token' | 'suspicious_activity';
  ipAddress: string;
  userAgent: string;
  clientId?: string;
  details: string;
}

// Legacy interface - keeping for backward compatibility

class OptimizedAnalyticsCollector {
  private requestBatch: RequestAnalytics[] = [];
  private securityBatch: SecurityEvent[] = [];
  private readonly BATCH_SIZE = 100; // Larger batches for better efficiency
  private readonly FLUSH_INTERVAL = 15000; // 15 seconds - faster flushing
  private flushTimer: NodeJS.Timeout | null = null;

  constructor() {
    this.startBatchFlush();
  }

  // Batched request logging - very fast, non-blocking
  async logRequest(data: RequestAnalytics) {
    // Extract client info synchronously (no external calls)
    const { clientType, platform } = this.extractClientInfo(data.userAgent);
    
    const enrichedData = {
      ...data,
      clientType,
      platform
    };

    console.log('[Analytics DB] Logging request:', {
      endpoint: data.endpoint,
      mcpMethod: data.mcpMethod,
      toolName: data.toolName,
      ipAddress: data.ipAddress
    });

    this.requestBatch.push(enrichedData);
    
    // For debugging: flush immediately if it's an MCP tool call
    if (data.mcpMethod || data.toolName) {
      console.log('[Analytics DB] Flushing immediately for MCP tool call');
      await this.flushRequests();
    }
    // Flush if batch is full
    else if (this.requestBatch.length >= this.BATCH_SIZE) {
      await this.flushRequests();
    }

    // Async geo enrichment (fire and forget)
    this.enrichGeographyAsync(data.ipAddress);
  }

  // Batched security event logging
  async logSecurityEvent(event: SecurityEvent) {
    this.securityBatch.push(event);
    
    if (this.securityBatch.length >= this.BATCH_SIZE) {
      await this.flushSecurityEvents();
    }
  }

  // Optimized database write with batching and connection management
  private async flushRequests() {
    if (this.requestBatch.length === 0) return;

    const batch = [...this.requestBatch];
    this.requestBatch = [];

    try {
      // Use transaction for better connection management
      await prisma.$transaction(async (tx) => {
        await tx.analyticsRequest.createMany({
          data: batch.map(req => ({
            timestamp: req.timestamp,
            endpoint: req.endpoint,
            method: req.method,
            statusCode: req.statusCode,
            responseTime: req.responseTime,
            clientId: req.clientId,
            userId: req.userId,
            mcpServerId: req.mcpServerId,
            ssoProvider: req.ssoProvider,
            userRole: req.userRole,
            scopes: req.scopes || [],
            organization: req.organization,
            ipAddress: req.ipAddress,
            userAgent: req.userAgent,
            country: req.country,
            city: req.city,
            clientType: req.clientType,
            platform: req.platform,
            mcpMethod: req.mcpMethod,
            toolName: req.toolName,
            oauthGrantType: req.oauthGrantType,
            tokenScopes: req.tokenScopes || [],
            usePKCE: req.usePKCE,
            redirectUri: req.redirectUri
          })),
          skipDuplicates: true
        });
      });
    } catch (error) {
      console.error('Failed to flush analytics requests:', error);
      // Re-add failed batch to retry later (with limit to prevent infinite growth)
      if (this.requestBatch.length < this.BATCH_SIZE * 2) {
        this.requestBatch.unshift(...batch);
      }
    }
  }

  private async flushSecurityEvents() {
    if (this.securityBatch.length === 0) return;

    const batch = [...this.securityBatch];
    this.securityBatch = [];

    try {
      // Map legacy event types to new enum values
      const mapLegacyEventType = (eventType: string): 'AUTH_FAILURE' | 'INVALID_TOKEN' | 'SUSPICIOUS_ACTIVITY' => {
        switch (eventType.toLowerCase()) {
          case 'auth_failure':
            return 'AUTH_FAILURE';
          case 'invalid_token':
            return 'INVALID_TOKEN';
          case 'suspicious_activity':
            return 'SUSPICIOUS_ACTIVITY';
          default:
            return 'SUSPICIOUS_ACTIVITY'; // Default fallback
        }
      };

      await prisma.analyticsSecurity.createMany({
        data: batch.map(event => ({
          timestamp: event.timestamp,
          eventType: mapLegacyEventType(event.eventType),
          severity: 'medium', // Default severity for legacy events
          ipAddress: event.ipAddress,
          userAgent: event.userAgent,
          clientId: event.clientId,
          details: { legacy: event.details } // Wrap in object for JSON field
        })),
        skipDuplicates: true
      });
    } catch (error) {
      console.error('Failed to flush security events:', error);
      this.securityBatch.unshift(...batch);
    }
  }

  // Automatic batch flushing
  private startBatchFlush() {
    this.flushTimer = setInterval(async () => {
      await Promise.all([
        this.flushRequests(),
        this.flushSecurityEvents()
      ]);
    }, this.FLUSH_INTERVAL);
  }

  // Cleanup on shutdown
  async shutdown() {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    // Final flush
    await Promise.all([
      this.flushRequests(),
      this.flushSecurityEvents()
    ]);
  }

  // Fast client info extraction (no external calls)
  private extractClientInfo(userAgent: string) {
    const ua = userAgent.toLowerCase();
    
    // Detect client type
    let clientType = 'unknown';
    if (ua.includes('mcp')) clientType = 'mcp-client';
    else if (ua.includes('postman')) clientType = 'postman';
    else if (ua.includes('curl')) clientType = 'curl';
    else if (ua.includes('python')) clientType = 'python-client';
    else if (ua.includes('node')) clientType = 'node-client';
    else if (ua.includes('browser') || ua.includes('mozilla')) clientType = 'browser';

    // Detect platform
    let platform = 'unknown';
    if (ua.includes('windows')) platform = 'windows';
    else if (ua.includes('mac') || ua.includes('darwin')) platform = 'macos';
    else if (ua.includes('linux')) platform = 'linux';
    else if (ua.includes('android')) platform = 'android';
    else if (ua.includes('ios')) platform = 'ios';

    return { clientType, platform };
  }

  // Async geography enrichment (non-blocking)
  private enrichGeographyAsync(ip: string) {
    // For development: Use mock data for localhost
    if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('::ffff:127.0.0.1')) {
      // Add mock geographic data for localhost in development
      setTimeout(async () => {
        try {
          await prisma.analyticsRequest.updateMany({
            where: {
              ipAddress: ip,
              country: null
            },
            data: {
              country: 'United States',
              city: 'San Francisco'
            }
          });
          console.log('[Analytics] Added mock geographic data for localhost');
        } catch (error) {
          console.warn('Failed to update localhost geographic data:', error);
        }
      }, 100);
      return;
    }

    // Fire and forget - don't block main request
    setTimeout(async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1500); // Quick timeout
        
        const response = await fetch(`http://ip-api.com/json/${ip}?fields=country,city`, {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const geo = await response.json();
          
          // Update the record in database if geo data is found
          if (geo.country && geo.city) {
            await prisma.analyticsRequest.updateMany({
              where: {
                ipAddress: ip,
                timestamp: {
                  gte: new Date(Date.now() - 60000) // Last 1 minute
                },
                country: null // Only update if not already set
              },
              data: {
                country: geo.country,
                city: geo.city
              }
            });
          }
        }
      } catch {
        // Silent fail for geo enrichment - not critical
      }
    }, 100); // Small delay to not block request
  }

  // High-performance analytics queries with proper indexing
  async getRequestAnalytics(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);
    
    return await prisma.analyticsRequest.findMany({
      where: {
        timestamp: {
          gte: cutoff
        }
      },
      orderBy: {
        timestamp: 'desc'
      },
      take: 1000 // Limit results for performance
    });
  }

  async getSecurityEvents(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);
    
    return await prisma.analyticsSecurity.findMany({
      where: {
        timestamp: {
          gte: cutoff
        }
      },
      orderBy: {
        timestamp: 'desc'
      },
      take: 500
    });
  }

  // Optimized aggregation queries
  async getPerformanceMetrics(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    // Use raw SQL for better performance on aggregations
    const result = await prisma.$queryRaw`
      SELECT 
        COUNT(*) as total_requests,
        AVG("responseTime") as avg_response_time,
        PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY "responseTime") as p95_response_time,
        CASE 
          WHEN COUNT(*) = 0 THEN 0
          ELSE COUNT(CASE WHEN "statusCode" >= 400 THEN 1 END) * 100.0 / COUNT(*)
        END as error_rate
      FROM "AnalyticsRequest"
      WHERE timestamp >= ${cutoff}
    ` as Array<{
      total_requests: bigint;
      avg_response_time: number;
      p95_response_time: number;
      error_rate: number;
    }>;

    const metrics = result[0];
    return metrics ? {
      totalRequests: Number(metrics.total_requests || 0),
      avgResponseTime: Math.round(metrics.avg_response_time || 0),
      p95ResponseTime: Math.round(metrics.p95_response_time || 0),
      errorRate: Math.round((metrics.error_rate || 0) * 100) / 100
    } : {
      totalRequests: 0,
      avgResponseTime: 0,
      p95ResponseTime: 0,
      errorRate: 0
    };
  }

  async getTopEndpoints(hoursBack = 24, limit = 10) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.$queryRaw`
      SELECT endpoint, COUNT(*) as count
      FROM "AnalyticsRequest"
      WHERE timestamp >= ${cutoff}
      GROUP BY endpoint
      ORDER BY count DESC
      LIMIT ${limit}
    ` as Array<{ endpoint: string; count: bigint }>;

    return result.map(r => ({
      endpoint: r.endpoint,
      count: Number(r.count)
    }));
  }

  async getGeographyStats(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const countries = await prisma.$queryRaw`
      SELECT country, COUNT(*) as count
      FROM "AnalyticsRequest"
      WHERE timestamp >= ${cutoff} AND country IS NOT NULL
      GROUP BY country
      ORDER BY count DESC
      LIMIT 10
    ` as Array<{ country: string; count: bigint }>;

    return countries.map(c => ({
      country: c.country,
      count: Number(c.count)
    }));
  }

  // Enterprise analytics queries
  async getUsersByMCPServer(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.analyticsRequest.findMany({
      where: {
        timestamp: { gte: cutoff },
        userId: { not: null },
        mcpServerId: { not: null }
      },
      include: {
        user: { select: { name: true, email: true } },
        mcpServer: { select: { name: true, identifier: true } }
      },
      distinct: ['userId', 'mcpServerId']
    });

    return result.map(r => ({
      userName: r.user?.name || 'Unknown',
      userEmail: r.user?.email || 'Unknown',
      mcpServerName: r.mcpServer?.name || 'Unknown',
      mcpServerIdentifier: r.mcpServer?.identifier || 'Unknown'
    }));
  }

  async getSecurityEventsByOrganization(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.$queryRaw`
      SELECT 
        organization,
        "eventType",
        severity,
        COUNT(*) as event_count,
        AVG("riskScore") as avg_risk_score
      FROM "AnalyticsSecurity"
      WHERE timestamp >= ${cutoff}
        AND organization IS NOT NULL
        AND "riskScore" >= 50
      GROUP BY organization, "eventType", severity
      ORDER BY event_count DESC
    ` as Array<{
      organization: string;
      eventType: string;
      severity: string;
      event_count: bigint;
      avg_risk_score: number;
    }>;

    return result.map(r => ({
      organization: r.organization,
      eventType: r.eventType,
      severity: r.severity,
      eventCount: Number(r.event_count),
      avgRiskScore: Math.round(r.avg_risk_score || 0)
    }));
  }

  async getUserPrivilegeEscalations(hoursBack = 168) { // Default 7 days
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.analyticsSecurity.findMany({
      where: {
        timestamp: { gte: cutoff },
        eventType: 'PRIVILEGE_ESCALATION',
        userId: { not: null }
      },
      include: {
        user: { select: { name: true, email: true } }
      },
      orderBy: { riskScore: 'desc' }
    });

    return result.map(r => ({
      userName: r.user?.name || 'Unknown',
      userEmail: r.user?.email || 'Unknown',
      eventType: r.eventType,
      riskScore: r.riskScore,
      timestamp: r.timestamp,
      details: r.details
    }));
  }

  async getMCPToolUsage(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.$queryRaw`
      SELECT 
        "toolName",
        "mcpMethod",
        COUNT(*) as usage_count,
        COUNT(DISTINCT "userId") as unique_users,
        AVG("responseTime") as avg_response_time,
        MAX("responseTime") as max_response_time,
        MIN("responseTime") as min_response_time,
        COUNT(CASE WHEN "statusCode" >= 400 THEN 1 END) as error_count
      FROM "AnalyticsRequest"
      WHERE timestamp >= ${cutoff}
        AND "toolName" IS NOT NULL
      GROUP BY "toolName", "mcpMethod"
      ORDER BY usage_count DESC
      LIMIT 20
    ` as Array<{
      toolName: string;
      mcpMethod: string;
      usage_count: bigint;
      unique_users: bigint;
      avg_response_time: number;
      max_response_time: number;
      min_response_time: number;
      error_count: bigint;
    }>;

    return result.map(r => ({
      toolName: r.toolName,
      mcpMethod: r.mcpMethod,
      usageCount: Number(r.usage_count),
      uniqueUsers: Number(r.unique_users),
      avgResponseTime: Math.round(Number(r.avg_response_time) || 0),
      maxResponseTime: Math.round(Number(r.max_response_time) || 0),
      minResponseTime: Math.round(Number(r.min_response_time) || 0),
      errorCount: Number(r.error_count),
      errorRate: Number(r.usage_count) > 0 ? Math.round((Number(r.error_count) / Number(r.usage_count)) * 100 * 100) / 100 : 0
    }));
  }

  async getToolGeographyStats(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.$queryRaw`
      SELECT 
        country,
        city,
        COUNT(*) as count
      FROM "AnalyticsRequest"
      WHERE timestamp >= ${cutoff} 
        AND country IS NOT NULL 
        AND "toolName" IS NOT NULL
      GROUP BY country, city
      ORDER BY count DESC
      LIMIT 15
    ` as Array<{ 
      country: string; 
      city: string | null; 
      count: bigint; 
    }>;

    const total = result.reduce((sum, r) => sum + Number(r.count), 0);

    return result.map(r => ({
      country: r.country,
      city: r.city,
      count: Number(r.count),
      percentage: total > 0 ? Math.round((Number(r.count) / total) * 100 * 100) / 100 : 0
    }));
  }

  async getToolResponseTimeTimeSeries(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.$queryRaw`
      SELECT 
        DATE_TRUNC('hour', timestamp) as hour,
        "toolName",
        AVG("responseTime") as avg_response_time,
        COUNT(*) as call_count,
        PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY "responseTime") as p95_response_time,
        PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY "responseTime") as p50_response_time
      FROM "AnalyticsRequest"
      WHERE timestamp >= ${cutoff}
        AND "toolName" IS NOT NULL
        AND "statusCode" < 400
      GROUP BY hour, "toolName"
      ORDER BY hour, "toolName"
    ` as Array<{
      hour: Date;
      toolName: string;
      avg_response_time: number;
      call_count: bigint;
      p95_response_time: number;
      p50_response_time: number;
    }>;

    return result.map(r => ({
      hour: r.hour.toISOString(),
      toolName: r.toolName,
      avgResponseTime: Math.round(Number(r.avg_response_time) || 0),
      callCount: Number(r.call_count),
      p95ResponseTime: Math.round(Number(r.p95_response_time) || 0),
      p50ResponseTime: Math.round(Number(r.p50_response_time) || 0)
    }));
  }

  // OAuth Analytics Functions - Meaningful MCP Metrics
  async getOAuthMetrics(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const [userStats, clientStats, tokenStats, authActivity] = await Promise.all([
      // Unique users who have authorized OAuth clients
      prisma.$queryRaw<Array<{ total_users: bigint; active_users: bigint }>>`
        SELECT 
          COUNT(DISTINCT u.id) as total_users,
          COUNT(DISTINCT CASE WHEN at."expiresAt" > NOW() THEN u.id END) as active_users
        FROM "User" u
        LEFT JOIN "AccessToken" at ON u.id = at."userId"
        WHERE u.id IN (
          SELECT DISTINCT "userId" FROM "AccessToken" 
          UNION 
          SELECT DISTINCT "userId" FROM "AuthCode"
        )
      `,
      
      // OAuth client statistics
      prisma.$queryRaw<Array<{ 
        total_clients: bigint; 
        clients_with_active_tokens: bigint;
      }>>`
        SELECT 
          COUNT(DISTINCT c.id) as total_clients,
          COUNT(DISTINCT CASE WHEN at."expiresAt" > NOW() THEN c.id END) as clients_with_active_tokens
        FROM "Client" c
        LEFT JOIN "AccessToken" at ON c.id = at."clientId"
      `,
      
      // Active token statistics  
      prisma.$queryRaw<Array<{ active_tokens: bigint }>>`
        SELECT COUNT(*) as active_tokens
        FROM "AccessToken"
        WHERE "expiresAt" > NOW()
      `,
      
      // Recent OAuth authorization activity
      prisma.$queryRaw<Array<{
        recent_authorizations: bigint;
        recent_token_refreshes: bigint;
        pkce_usage: bigint;
        total_oauth_requests: bigint;
      }>>`
        SELECT 
          COUNT(CASE WHEN "oauthGrantType" = 'authorization_code' THEN 1 END) as recent_authorizations,
          COUNT(CASE WHEN "oauthGrantType" = 'refresh_token' THEN 1 END) as recent_token_refreshes,
          COUNT(CASE WHEN "usePKCE" = true THEN 1 END) as pkce_usage,
          COUNT(*) as total_oauth_requests
        FROM "AnalyticsRequest"
        WHERE timestamp >= ${cutoff}
          AND "oauthGrantType" IS NOT NULL
      `
    ]);

    const userData = userStats[0];
    const clientData = clientStats[0];
    const tokenData = tokenStats[0];
    const authData = authActivity[0];
    
    const totalUsers = Number(userData?.total_users || 0);
    const activeUsers = Number(userData?.active_users || 0);
    const totalClients = Number(clientData?.total_clients || 0);
    const activeClients = Number(clientData?.clients_with_active_tokens || 0);
    const activeTokenCount = Number(tokenData?.active_tokens || 0);
    const recentAuthorizations = Number(authData?.recent_authorizations || 0);
    const recentRefreshes = Number(authData?.recent_token_refreshes || 0);
    const pkceUsage = Number(authData?.pkce_usage || 0);
    const totalOAuthRequests = Number(authData?.total_oauth_requests || 0);
    
    const pkceAdoption = totalOAuthRequests > 0 ? (pkceUsage / totalOAuthRequests) * 100 : 0;

    return {
      // User metrics (most important for MCP)
      totalUsers,
      activeUsers,
      userActivity: `${activeUsers}/${totalUsers} users active`,
      
      // Client metrics  
      totalClients,
      activeClients,
      clientActivity: `${activeClients}/${totalClients} clients active`,
      
      // Token metrics
      activeTokens: activeTokenCount,
      recentAuthorizations,
      tokenRefreshRate: recentRefreshes / hoursBack,
      
      // Security metrics
      pkceAdoption: Math.round(pkceAdoption * 100) / 100
    };
  }

  async getOAuthClientActivity(hoursBack = 24, limit = 10) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    // Get clients with active tokens and their user activity
    const result = await prisma.$queryRaw<Array<{
      client_name: string;
      client_id: string;
      unique_users: bigint;
      active_tokens: bigint;
      recent_requests: bigint;
      last_activity: Date | null;
      user_names: string;
    }>>`
      SELECT 
        c.name as client_name,
        c."clientId" as client_id,
        COUNT(DISTINCT at."userId") as unique_users,
        COUNT(CASE WHEN at."expiresAt" > NOW() THEN at.id END) as active_tokens,
        COUNT(ar.id) as recent_requests,
        MAX(ar.timestamp) as last_activity,
        STRING_AGG(DISTINCT u.name, ', ') as user_names
      FROM "Client" c
      LEFT JOIN "AccessToken" at ON c.id = at."clientId"
      LEFT JOIN "User" u ON at."userId" = u.id
      LEFT JOIN "AnalyticsRequest" ar ON c.id = ar."clientId" AND ar.timestamp >= ${cutoff}
      GROUP BY c.id, c.name, c."clientId"
      HAVING COUNT(CASE WHEN at."expiresAt" > NOW() THEN at.id END) > 0  -- Only show clients with active tokens
      ORDER BY active_tokens DESC, unique_users DESC, last_activity DESC NULLS LAST
      LIMIT ${limit}
    `;

    return result.map(r => ({
      name: r.client_name,
      clientId: r.client_id,
      uniqueUsers: Number(r.unique_users),
      activeTokens: Number(r.active_tokens),
      recentRequests: Number(r.recent_requests),
      lastActivity: r.last_activity?.toISOString() || 'Never',
      userNames: r.user_names || 'No users',
      // Meaningful display instead of fake data
      status: Number(r.active_tokens) > 0 ? 'Active' : 'Inactive'
    }));
  }

  async getExpiringTokens(hoursAhead = 24) {
    const cutoff = new Date(Date.now() + hoursAhead * 60 * 60 * 1000);

    const result = await prisma.$queryRaw`
      SELECT 
        c.name as client_name,
        COUNT(at.id) as token_count,
        EXTRACT(EPOCH FROM (MIN(at."expiresAt") - NOW())) / 3600 as hours_until_expiry
      FROM "AccessToken" at
      JOIN "Client" c ON at."clientId" = c.id
      WHERE at."expiresAt" <= ${cutoff} AND at."expiresAt" > NOW()
      GROUP BY c.name
      ORDER BY hours_until_expiry ASC
      LIMIT 10
    ` as Array<{
      client_name: string;
      token_count: bigint;
      hours_until_expiry: number;
    }>;

    return result.map(r => ({
      clientName: r.client_name,
      tokenCount: Number(r.token_count),
      hoursUntilExpiry: Math.round(r.hours_until_expiry * 100) / 100
    }));
  }

  async getGrantTypeDistribution(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const result = await prisma.$queryRaw`
      SELECT 
        "oauthGrantType" as grant_type,
        COUNT(*) as count
      FROM "AnalyticsRequest"
      WHERE timestamp >= ${cutoff}
        AND "oauthGrantType" IS NOT NULL
      GROUP BY "oauthGrantType"
      ORDER BY count DESC
    ` as Array<{
      grant_type: string;
      count: bigint;
    }>;

    const total = result.reduce((sum, r) => sum + Number(r.count), 0);

    return result.map(r => ({
      type: r.grant_type,
      count: Number(r.count),
      percentage: total > 0 ? Math.round((Number(r.count) / total) * 100 * 100) / 100 : 0
    }));
  }

  async getOAuthSecurityEvents(hoursBack = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    const [events, invalidClientAttempts, invalidGrantAttempts, unauthorizedScopes] = await Promise.all([
      // OAuth-specific security events
      prisma.$queryRaw<Array<{
        client_name: string | null;
        client_id: string;
        event_type: string;
        severity: string;
        count: bigint;
        last_occurred: Date;
      }>>`
        SELECT 
          c.name as client_name,
          s."clientId" as client_id,
          s."eventType" as event_type,
          s.severity,
          COUNT(*) as count,
          MAX(s.timestamp) as last_occurred
        FROM "AnalyticsSecurity" s
        LEFT JOIN "Client" c ON s."clientId" = c.id
        WHERE s.timestamp >= ${cutoff}
          AND s."clientId" IS NOT NULL
        GROUP BY c.name, s."clientId", s."eventType", s.severity
        ORDER BY count DESC, last_occurred DESC
        LIMIT 20
      `,

      // Count invalid client attempts
      prisma.analyticsSecurity.count({
        where: {
          timestamp: { gte: cutoff },
          eventType: { in: ['AUTH_FAILURE'] }
        }
      }),

      // Count invalid grant attempts  
      prisma.analyticsSecurity.count({
        where: {
          timestamp: { gte: cutoff },
          eventType: 'INVALID_TOKEN'
        }
      }),

      // Count unauthorized scope requests
      prisma.analyticsSecurity.count({
        where: {
          timestamp: { gte: cutoff },
          eventType: 'UNAUTHORIZED_ACCESS'
        }
      })
    ]);

    const mappedEvents = events.map(e => ({
      clientName: e.client_name || 'Unknown Client',
      clientId: e.client_id,
      eventType: e.event_type,
      severity: e.severity,
      count: Number(e.count),
      lastOccurred: e.last_occurred.toISOString()
    }));

    return {
      totalEvents: mappedEvents.reduce((sum, e) => sum + e.count, 0),
      invalidClientAttempts,
      invalidGrantAttempts,
      unauthorizedScopes,
      events: mappedEvents
    };
  }

  // Cleanup old data to prevent database bloat
  async cleanupOldData(daysOld = 30) {
    const cutoff = new Date(Date.now() - daysOld * 24 * 60 * 60 * 1000);
    
    await Promise.all([
      prisma.analyticsRequest.deleteMany({
        where: {
          timestamp: {
            lt: cutoff
          }
        }
      }),
      prisma.analyticsSecurity.deleteMany({
        where: {
          timestamp: {
            lt: cutoff
          }
        }
      })
    ]);
  }
}

// Utility functions
export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  return '127.0.0.1';
}

// Singleton instance
export const analyticsDB = new OptimizedAnalyticsCollector();

// Note: Graceful shutdown removed for Edge Runtime compatibility
// In production, implement cleanup in your deployment process

// Security Panel Data Functions for meaningful threats only
export interface SecurityEventsByOrg {
  organization: string;
  eventType: string;
  severity: string;
  eventCount: number;
  avgRiskScore: number;
}

export interface PrivilegeEscalation {
  userName: string;
  userEmail: string;
  eventType: string;
  riskScore: number;
  timestamp: string;
  details: Record<string, unknown>;
}

export interface SecurityAnalytics {
  totalEvents: number;
  eventsByOrganization: SecurityEventsByOrg[];
  privilegeEscalations: PrivilegeEscalation[];
  criticalEvents: number;
  highRiskEvents: number;
  resolvedEvents: number;
  averageRiskScore: number;
}

// Get security analytics for SecurityPanel component - only meaningful threats
export async function getSecurityAnalytics(
  startDate: Date = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
  endDate: Date = new Date()
): Promise<SecurityAnalytics> {
  try {
    // Get total event count (only meaningful threats with risk score >= 50)
    const totalEvents = await prisma.analyticsSecurity.count({
      where: {
        timestamp: { gte: startDate, lte: endDate },
        riskScore: { gte: 50 }
      }
    });

    // Get events grouped by organization - using the existing function but filtered
    const eventsByOrg = await analyticsDB.getSecurityEventsByOrganization(
      Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60))
    );

    // Get privilege escalations with user details - only high risk
    const privilegeEscalationData = await prisma.analyticsSecurity.findMany({
      where: {
        timestamp: { gte: startDate, lte: endDate },
        eventType: 'PRIVILEGE_ESCALATION',
        userId: { not: null },
        riskScore: { gte: 70 } // Only high-risk privilege escalations
      },
      include: {
        user: { select: { name: true, email: true } }
      },
      orderBy: { riskScore: 'desc' }
    });

    const privilegeEscalations: PrivilegeEscalation[] = privilegeEscalationData.map(event => ({
      userName: event.user?.name || 'Unknown User',
      userEmail: event.user?.email || 'unknown@example.com',
      eventType: event.eventType,
      riskScore: event.riskScore,
      timestamp: event.timestamp.toISOString(),
      details: event.details as Record<string, unknown>
    }));

    // Get additional statistics
    const [criticalEvents, highRiskEvents, resolvedEvents, avgRiskScore] = await Promise.all([
      prisma.analyticsSecurity.count({
        where: {
          timestamp: { gte: startDate, lte: endDate },
          severity: 'critical',
          riskScore: { gte: 50 }
        }
      }),
      prisma.analyticsSecurity.count({
        where: {
          timestamp: { gte: startDate, lte: endDate },
          riskScore: { gte: 70 }
        }
      }),
      prisma.analyticsSecurity.count({
        where: {
          timestamp: { gte: startDate, lte: endDate },
          resolved: true,
          riskScore: { gte: 50 }
        }
      }),
      prisma.analyticsSecurity.aggregate({
        where: {
          timestamp: { gte: startDate, lte: endDate },
          riskScore: { gte: 50 }
        },
        _avg: { riskScore: true }
      })
    ]);

    return {
      totalEvents,
      eventsByOrganization: eventsByOrg,
      privilegeEscalations,
      criticalEvents,
      highRiskEvents,
      resolvedEvents,
      averageRiskScore: Math.round(avgRiskScore._avg.riskScore || 0)
    };
  } catch (error) {
    console.error('Error fetching security analytics:', error);
    // Return empty analytics on error
    return {
      totalEvents: 0,
      eventsByOrganization: [],
      privilegeEscalations: [],
      criticalEvents: 0,
      highRiskEvents: 0,
      resolvedEvents: 0,
      averageRiskScore: 0
    };
  }
}

export type { RequestAnalytics, SecurityEvent };