import { NextRequest } from 'next/server';

// In-memory analytics store (Phase 1 - no DB changes)
interface RequestAnalytics {
  timestamp: Date;
  endpoint: string;
  method: string;
  clientId?: string;
  userId?: string;
  ipAddress: string;
  userAgent: string;
  responseTime: number;
  statusCode: number;
  country?: string;
  city?: string;
  clientType?: string;
  platform?: string;
}

interface SecurityEvent {
  timestamp: Date;
  type: 'auth_failure' | 'invalid_token' | 'suspicious_activity';
  ipAddress: string;
  userAgent: string;
  clientId?: string;
  details: string;
}

class AnalyticsCollector {
  private requests: RequestAnalytics[] = [];
  private securityEvents: SecurityEvent[] = [];
  private readonly MAX_MEMORY_ENTRIES = 10000; // Prevent memory bloat

  // Request analytics
  logRequest(data: RequestAnalytics) {
    this.requests.push(data);
    this.cleanup();
  }

  // Security events
  logSecurityEvent(event: SecurityEvent) {
    this.securityEvents.push(event);
    this.cleanup();
  }

  // Get analytics data
  getRequestAnalytics(hoursBack: number = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);
    return this.requests.filter(r => r.timestamp >= cutoff);
  }

  getSecurityEvents(hoursBack: number = 24) {
    const cutoff = new Date(Date.now() - hoursBack * 60 * 60 * 1000);
    return this.securityEvents.filter(e => e.timestamp >= cutoff);
  }

  // Cleanup old entries to prevent memory issues
  private cleanup() {
    if (this.requests.length > this.MAX_MEMORY_ENTRIES) {
      this.requests = this.requests.slice(-this.MAX_MEMORY_ENTRIES);
    }
    if (this.securityEvents.length > this.MAX_MEMORY_ENTRIES) {
      this.securityEvents = this.securityEvents.slice(-this.MAX_MEMORY_ENTRIES);
    }
  }

  // Geographic analysis
  analyzeGeography() {
    const recent = this.getRequestAnalytics(24);
    const countries = new Map<string, number>();
    const cities = new Map<string, number>();

    recent.forEach(req => {
      if (req.country) {
        countries.set(req.country, (countries.get(req.country) || 0) + 1);
      }
      if (req.city) {
        cities.set(req.city, (cities.get(req.city) || 0) + 1);
      }
    });

    return {
      topCountries: Array.from(countries.entries())
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([country, count]) => ({ country, count })),
      topCities: Array.from(cities.entries())
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([city, count]) => ({ city, count }))
    };
  }

  // Client analysis
  analyzeClients() {
    const recent = this.getRequestAnalytics(24);
    const clientTypes = new Map<string, number>();
    const platforms = new Map<string, number>();
    const responseTimesByClient = new Map<string, number[]>();

    recent.forEach(req => {
      if (req.clientType) {
        clientTypes.set(req.clientType, (clientTypes.get(req.clientType) || 0) + 1);
      }
      if (req.platform) {
        platforms.set(req.platform, (platforms.get(req.platform) || 0) + 1);
      }
      if (req.clientId) {
        if (!responseTimesByClient.has(req.clientId)) {
          responseTimesByClient.set(req.clientId, []);
        }
        responseTimesByClient.get(req.clientId)!.push(req.responseTime);
      }
    });

    const avgResponseTimes = Array.from(responseTimesByClient.entries()).map(([clientId, times]) => ({
      clientId,
      avgResponseTime: times.reduce((a, b) => a + b, 0) / times.length,
      requestCount: times.length
    }));

    return {
      clientTypes: Array.from(clientTypes.entries()).map(([type, count]) => ({ type, count })),
      platforms: Array.from(platforms.entries()).map(([platform, count]) => ({ platform, count })),
      clientPerformance: avgResponseTimes.sort((a, b) => b.requestCount - a.requestCount).slice(0, 10)
    };
  }

  // Usage patterns
  analyzeUsagePatterns() {
    const recent = this.getRequestAnalytics(168); // 7 days
    const hourlyPattern = new Array(24).fill(0);
    const dailyPattern = new Array(7).fill(0);
    const endpointUsage = new Map<string, number>();

    recent.forEach(req => {
      const hour = req.timestamp.getHours();
      const dayOfWeek = req.timestamp.getDay();
      
      hourlyPattern[hour]++;
      dailyPattern[dayOfWeek]++;
      endpointUsage.set(req.endpoint, (endpointUsage.get(req.endpoint) || 0) + 1);
    });

    return {
      hourlyPattern: hourlyPattern.map((count, hour) => ({ hour, count })),
      weeklyPattern: dailyPattern.map((count, day) => ({ 
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day], 
        count 
      })),
      topEndpoints: Array.from(endpointUsage.entries())
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([endpoint, count]) => ({ endpoint, count }))
    };
  }

  // Performance metrics
  getPerformanceMetrics() {
    const recent = this.getRequestAnalytics(24);
    if (recent.length === 0) return null;

    const responseTimes = recent.map(r => r.responseTime);
    const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    const p95ResponseTime = responseTimes.sort((a, b) => a - b)[Math.floor(responseTimes.length * 0.95)];
    
    const statusCodes = new Map<number, number>();
    recent.forEach(req => {
      statusCodes.set(req.statusCode, (statusCodes.get(req.statusCode) || 0) + 1);
    });

    const errorRate = ((statusCodes.get(500) || 0) + (statusCodes.get(401) || 0) + (statusCodes.get(403) || 0)) / recent.length * 100;

    return {
      totalRequests: recent.length,
      avgResponseTime: Math.round(avgResponseTime),
      p95ResponseTime: Math.round(p95ResponseTime || 0),
      errorRate: Math.round(errorRate * 100) / 100,
      statusCodeDistribution: Array.from(statusCodes.entries()).map(([code, count]) => ({ code, count }))
    };
  }
}

// Singleton instance
export const analyticsCollector = new AnalyticsCollector();

// Utility functions
export function extractClientInfo(userAgent: string) {
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

export async function getLocationFromIP(ip: string) {
  // Skip for localhost/private IPs
  if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return { country: 'Local', city: 'Local' };
  }

  try {
    // Using a free IP geolocation service (ip-api.com)
    // In production, consider using a paid service for better reliability
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=country,city`, {
      timeout: 2000 // 2 second timeout
    });
    
    if (response.ok) {
      const data = await response.json();
      return {
        country: data.country || 'Unknown',
        city: data.city || 'Unknown'
      };
    }
  } catch (error) {
    console.warn('Failed to get location for IP:', ip, error);
  }

  return { country: 'Unknown', city: 'Unknown' };
}

export function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
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
  
  // Fallback to a default IP if none found
  return '127.0.0.1';
}

export { RequestAnalytics, SecurityEvent };