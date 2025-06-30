import { NextRequest } from 'next/server';
import { prisma } from '../app/prisma';

// Optimized interfaces for database operations
interface RequestAnalytics {
  timestamp: Date;
  endpoint: string;
  method: string;
  statusCode: number;
  responseTime: number;
  clientId?: string;
  userId?: string;
  ipAddress: string;
  userAgent: string;
  country?: string;
  city?: string;
  clientType?: string;
  platform?: string;
}

interface SecurityEvent {
  timestamp: Date;
  eventType: 'auth_failure' | 'invalid_token' | 'suspicious_activity';
  ipAddress: string;
  userAgent: string;
  clientId?: string;
  details: string;
}

class OptimizedAnalyticsCollector {
  private requestBatch: RequestAnalytics[] = [];
  private securityBatch: SecurityEvent[] = [];
  private readonly BATCH_SIZE = 50; // Batch writes for performance
  private readonly FLUSH_INTERVAL = 30000; // 30 seconds
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

    this.requestBatch.push(enrichedData);
    
    // Flush if batch is full
    if (this.requestBatch.length >= this.BATCH_SIZE) {
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

  // Optimized database write with batching
  private async flushRequests() {
    if (this.requestBatch.length === 0) return;

    const batch = [...this.requestBatch];
    this.requestBatch = [];

    try {
      await prisma.analyticsRequest.createMany({
        data: batch.map(req => ({
          timestamp: req.timestamp,
          endpoint: req.endpoint,
          method: req.method,
          statusCode: req.statusCode,
          responseTime: req.responseTime,
          clientId: req.clientId,
          userId: req.userId,
          ipAddress: req.ipAddress,
          userAgent: req.userAgent,
          country: req.country,
          city: req.city,
          clientType: req.clientType,
          platform: req.platform
        })),
        skipDuplicates: true // Prevent errors on duplicate inserts
      });
    } catch (error) {
      console.error('Failed to flush analytics requests:', error);
      // Re-add failed batch to retry later
      this.requestBatch.unshift(...batch);
    }
  }

  private async flushSecurityEvents() {
    if (this.securityBatch.length === 0) return;

    const batch = [...this.securityBatch];
    this.securityBatch = [];

    try {
      await prisma.analyticsSecurity.createMany({
        data: batch.map(event => ({
          timestamp: event.timestamp,
          eventType: event.eventType,
          ipAddress: event.ipAddress,
          userAgent: event.userAgent,
          clientId: event.clientId,
          details: event.details
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
    // Skip for localhost/private IPs
    if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
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
        AVG(response_time) as avg_response_time,
        PERCENTILE_CONT(0.95) WITHIN GROUP (ORDER BY response_time) as p95_response_time,
        COUNT(CASE WHEN status_code >= 400 THEN 1 END) * 100.0 / COUNT(*) as error_rate
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
      totalRequests: Number(metrics.total_requests),
      avgResponseTime: Math.round(metrics.avg_response_time || 0),
      p95ResponseTime: Math.round(metrics.p95_response_time || 0),
      errorRate: Math.round((metrics.error_rate || 0) * 100) / 100
    } : null;
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

export type { RequestAnalytics, SecurityEvent };