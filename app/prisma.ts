import { PrismaClient } from '@/generated/prisma';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more: https://pris.ly/d/help/next-js-best-practices

const prisma = global.prisma || new PrismaClient({
  // Use Prisma Accelerate for connection pooling
  datasourceUrl: process.env.PRISMA_DATABASE_URL || process.env.DATABASE_URL,
  // Optimize for serverless environments
  ...(process.env.NODE_ENV === 'production' && {
    log: ['error'],
    errorFormat: 'minimal',
  })
});

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// TTL Cleanup function - removes data older than 14 days
export async function cleanupExpiredData() {
  const now = new Date();
  
  try {
    const result = await prisma.$transaction([
      // Cleanup expired analytics requests
      prisma.analyticsRequest.deleteMany({
        where: { expiresAt: { lt: now } }
      }),
      
      // Cleanup expired security events
      prisma.analyticsSecurity.deleteMany({
        where: { expiresAt: { lt: now } }
      }),
      
      // Cleanup expired OAuth tokens
      prisma.accessToken.deleteMany({
        where: { expiresAt: { lt: now } }
      }),
      
      prisma.authCode.deleteMany({
        where: { expiresAt: { lt: now } }
      }),
      
      prisma.refreshToken.deleteMany({
        where: { expiresAt: { lt: now } }
      })
    ]);
    
    const totalDeleted = result.reduce((sum, res) => sum + res.count, 0);
    
    console.log(`TTL Cleanup completed: ${totalDeleted} records deleted`);
    return { success: true, deletedCount: totalDeleted };
  } catch (error) {
    console.error('TTL Cleanup failed:', error);
    return { success: false, error: (error as Error).message };
  }
}

// Get TTL status for monitoring
export async function getTTLStatus() {
  const now = new Date();
  const oneDayFromNow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  
  try {
    const [expiredAnalytics, expiringSoonAnalytics, expiredSecurity, expiringSoonSecurity] = await Promise.all([
      prisma.analyticsRequest.count({
        where: { expiresAt: { lt: now } }
      }),
      prisma.analyticsRequest.count({
        where: { expiresAt: { lt: oneDayFromNow, gte: now } }
      }),
      prisma.analyticsSecurity.count({
        where: { expiresAt: { lt: now } }
      }),
      prisma.analyticsSecurity.count({
        where: { expiresAt: { lt: oneDayFromNow, gte: now } }
      })
    ]);
    
    return {
      analyticsRequests: {
        expired: expiredAnalytics,
        expiringSoon: expiringSoonAnalytics
      },
      securityEvents: {
        expired: expiredSecurity,
        expiringSoon: expiringSoonSecurity
      },
      timestamp: now
    };
  } catch (error) {
    console.error('Failed to get TTL status:', error);
    return { error: (error as Error).message };
  }
}

export { prisma };

declare global {
  var prisma: PrismaClient | undefined;
} 
