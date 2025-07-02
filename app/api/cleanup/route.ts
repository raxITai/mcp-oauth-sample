import { NextResponse } from 'next/server';
import { cleanupExpiredData, getTTLStatus } from '@/app/prisma';

export async function POST() {
  try {
    const result = await cleanupExpiredData();
    
    if (result.success) {
      return NextResponse.json({
        message: 'Cleanup completed successfully',
        deletedCount: result.deletedCount
      });
    } else {
      return NextResponse.json(
        { error: 'Cleanup failed', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const status = await getTTLStatus();
    
    if (status.error) {
      return NextResponse.json(
        { error: 'Failed to get TTL status', details: status.error },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      message: 'TTL status retrieved successfully',
      data: status
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: (error as Error).message },
      { status: 500 }
    );
  }
}