import { NextRequest, NextResponse } from 'next/server';
import { securityMonitor } from '@/lib/security-monitor';
import { prisma } from '@/app/prisma';

export async function POST(request: NextRequest) {
  try {
    const { runDetection, mockScenarios } = await request.json();
    
    if (!runDetection) {
      return NextResponse.json({ 
        error: 'Detection not enabled' 
      }, { status: 400 });
    }

    // Get real database entities for realistic context
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

    // Create realistic security context for threat detection
    const mockContext = {
      userId: recentUser?.id,
      clientId: recentClient?.id,
      ipAddress: request.headers.get('x-forwarded-for') || '192.168.1.100',
      userAgent: request.headers.get('user-agent') || 'curl/7.68.0', // Suspicious user agent
      endpoint: '/mcp/sse',
      organization: 'Test Organization',
      ssoProvider: 'google',
      mcpServerId: recentMCPServer?.id
    };

    let totalThreats = 0;

    // Run different threat scenarios based on mockScenarios
    for (const scenario of mockScenarios || []) {
      const contextForScenario = { ...mockContext };
      
      switch (scenario) {
        case 'privilege_escalation':
          // Create analytics requests with escalating scopes to trigger privilege escalation detection
          if (mockContext.userId) {
            await prisma.analyticsRequest.createMany({
              data: [
                {
                  timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
                  endpoint: '/oauth/token',
                  method: 'POST',
                  statusCode: 200,
                  responseTime: 150,
                  userId: mockContext.userId,
                  clientId: mockContext.clientId,
                  mcpServerId: mockContext.mcpServerId,
                  ipAddress: mockContext.ipAddress,
                  userAgent: mockContext.userAgent,
                  scopes: ['read', 'write'] // Historical scopes
                },
                {
                  timestamp: new Date(), // Now with elevated scopes
                  endpoint: '/oauth/token',
                  method: 'POST',
                  statusCode: 200,
                  responseTime: 180,
                  userId: mockContext.userId,
                  clientId: mockContext.clientId,
                  mcpServerId: mockContext.mcpServerId,
                  ipAddress: mockContext.ipAddress,
                  userAgent: mockContext.userAgent,
                  scopes: ['read', 'write', 'admin', 'delete'] // New elevated scopes
                }
              ]
            });
          }
          break;

        case 'token_reuse':
          // Create requests from different IPs to trigger token reuse detection
          if (mockContext.userId) {
            await prisma.analyticsRequest.createMany({
              data: [
                {
                  timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
                  endpoint: '/mcp/sse',
                  method: 'POST',
                  statusCode: 200,
                  responseTime: 120,
                  userId: mockContext.userId,
                  clientId: mockContext.clientId,
                  mcpServerId: mockContext.mcpServerId,
                  ipAddress: '10.0.0.50', // Different IP
                  userAgent: mockContext.userAgent,
                  scopes: ['read']
                }
              ]
            });
          }
          contextForScenario.ipAddress = '192.168.1.100'; // Current IP different from above
          break;

        case 'rate_limit_exceeded':
          // Create many recent requests to trigger rate limiting
          if (mockContext.userId) {
            const requests = Array.from({ length: 35 }, (_, i) => ({
              timestamp: new Date(Date.now() - (35 - i) * 1000), // Spread over last 35 seconds
              endpoint: '/mcp/sse',
              method: 'POST',
              statusCode: 200,
              responseTime: 100 + Math.random() * 50,
              userId: mockContext.userId,
              clientId: mockContext.clientId,
              mcpServerId: mockContext.mcpServerId,
              ipAddress: mockContext.ipAddress,
              userAgent: mockContext.userAgent,
              scopes: ['read']
            }));
            
            await prisma.analyticsRequest.createMany({ data: requests });
          }
          break;

        case 'oauth_pkce_bypass':
          // Create OAuth requests without PKCE to trigger bypass detection
          if (mockContext.userId) {
            await prisma.analyticsRequest.createMany({
              data: Array.from({ length: 3 }, (_, i) => ({
                timestamp: new Date(Date.now() - (3 - i) * 60 * 1000),
                endpoint: '/oauth/authorize',
                method: 'POST',
                statusCode: 200,
                responseTime: 200,
                userId: mockContext.userId,
                clientId: mockContext.clientId,
                mcpServerId: mockContext.mcpServerId,
                ipAddress: mockContext.ipAddress,
                userAgent: mockContext.userAgent,
                oauthGrantType: 'authorization_code',
                usePKCE: false, // PKCE bypass
                scopes: ['read']
              }))
            });
          }
          break;
      }

      // Run SecurityMonitor threat detection with the configured context
      const detectedThreats = await securityMonitor.detectThreats(contextForScenario, request);
      
      // Log the detected threats
      if (detectedThreats.length > 0) {
        await securityMonitor.logSecurityEvents(detectedThreats, contextForScenario);
        totalThreats += detectedThreats.length;
      }
    }

    return NextResponse.json({ 
      success: true,
      message: `SecurityMonitor detected and logged ${totalThreats} realistic threats`,
      threatsDetected: totalThreats,
      scenarios: mockScenarios
    });

  } catch (error) {
    console.error('SecurityMonitor threat generation error:', error);
    return NextResponse.json({ 
      error: 'Failed to generate threats using SecurityMonitor',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'SecurityMonitor Threat Generator API',
    usage: 'POST with { "runDetection": true, "mockScenarios": ["privilege_escalation", "token_reuse"] }',
    availableScenarios: [
      'privilege_escalation',   // OAuth scope escalation detection
      'token_reuse',           // Cross-IP token usage detection  
      'rate_limit_exceeded',   // API abuse detection
      'oauth_pkce_bypass'      // PKCE bypass detection
    ],
    description: 'Uses real SecurityMonitor detection logic with mock data scenarios'
  });
}