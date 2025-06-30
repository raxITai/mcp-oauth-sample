import { NextResponse } from 'next/server';
import { prisma } from '@/app/prisma';
import { analyticsCollector } from '@/lib/analytics';

export async function GET() {
  try {
    // Get current date for time-based queries
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // User metrics
    const totalUsers = await prisma.user.count();
    
    // Since Account doesn't have createdAt, we'll use a different approach
    // Count total users as proxy for now
    const newUsersLast30Days = totalUsers;

    // Active sessions
    const activeSessions = await prisma.session.count({
      where: {
        expires: {
          gt: now
        }
      }
    });

    const activeSessionsLast7Days = await prisma.session.count({
      where: {
        expires: {
          gt: now
        },
        user: {
          sessions: {
            some: {
              expires: {
                gte: sevenDaysAgo
              }
            }
          }
        }
      }
    });

    // OAuth client metrics
    const totalClients = await prisma.client.count();
    const clientsLast30Days = await prisma.client.count({
      where: {
        createdAt: {
          gte: thirtyDaysAgo
        }
      }
    });

    // Token metrics
    const totalAccessTokens = await prisma.accessToken.count();
    const activeAccessTokens = await prisma.accessToken.count({
      where: {
        expiresAt: {
          gt: now
        }
      }
    });

    const expiredAccessTokens = await prisma.accessToken.count({
      where: {
        expiresAt: {
          lt: now
        }
      }
    });

    const tokensCreatedLast24Hours = await prisma.accessToken.count({
      where: {
        createdAt: {
          gte: oneDayAgo
        }
      }
    });

    // Token usage by client
    const tokensByClient = await prisma.accessToken.groupBy({
      by: ['clientId'],
      _count: {
        id: true
      },
      orderBy: {
        _count: {
          id: 'desc'
        }
      },
      take: 10
    });

    // Get client names for the top clients
    const topClientIds = tokensByClient.map(tc => tc.clientId);
    const clientDetails = await prisma.client.findMany({
      where: {
        id: {
          in: topClientIds
        }
      },
      select: {
        id: true,
        name: true,
        clientId: true
      }
    });

    const topClientUsage = tokensByClient.map(tc => {
      const client = clientDetails.find(cd => cd.id === tc.clientId);
      return {
        clientName: client?.name || 'Unknown',
        clientId: client?.clientId || tc.clientId,
        tokenCount: tc._count.id
      };
    });

    // Refresh token metrics
    const totalRefreshTokens = await prisma.refreshToken.count();
    const activeRefreshTokens = await prisma.refreshToken.count({
      where: {
        expiresAt: {
          gt: now
        }
      }
    });

    // Auth code metrics (authorization flow success)
    const authCodesLast7Days = await prisma.authCode.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo
        }
      }
    });

    // Daily token creation trend (last 7 days)
    const dailyTokens = await prisma.$queryRaw`
      SELECT 
        DATE("createdAt") as date,
        COUNT(*) as count
      FROM "AccessToken"
      WHERE "createdAt" >= ${sevenDaysAgo}
      GROUP BY DATE("createdAt")
      ORDER BY date ASC
    ` as Array<{date: Date, count: bigint}>;

    const tokenTrend = dailyTokens.map(dt => ({
      date: dt.date.toISOString().split('T')[0],
      count: Number(dt.count)
    }));

    // Success rate calculation (tokens created vs auth codes)
    const authSuccessRate = authCodesLast7Days > 0 
      ? Math.round((tokensCreatedLast24Hours / authCodesLast7Days) * 100) 
      : 0;

    // Get enhanced analytics from in-memory collector
    const realtimeAnalytics = {
      geography: analyticsCollector.analyzeGeography(),
      clientAnalysis: analyticsCollector.analyzeClients(),
      usagePatterns: analyticsCollector.analyzeUsagePatterns(),
      performance: analyticsCollector.getPerformanceMetrics(),
      security: {
        events: analyticsCollector.getSecurityEvents(24),
        eventCount: analyticsCollector.getSecurityEvents(24).length
      }
    };

    const analytics = {
      overview: {
        totalUsers,
        newUsersLast30Days,
        activeSessions,
        activeSessionsLast7Days,
        totalClients,
        clientsLast30Days
      },
      tokens: {
        total: totalAccessTokens,
        active: activeAccessTokens,
        expired: expiredAccessTokens,
        createdLast24Hours: tokensCreatedLast24Hours,
        refreshTokens: {
          total: totalRefreshTokens,
          active: activeRefreshTokens
        }
      },
      usage: {
        topClients: topClientUsage,
        authCodesLast7Days,
        authSuccessRate,
        dailyTokenTrend: tokenTrend
      },
      realtime: realtimeAnalytics,
      lastUpdated: now.toISOString()
    };

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}