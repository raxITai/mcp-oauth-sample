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

export { prisma };

declare global {
  var prisma: PrismaClient | undefined;
} 
