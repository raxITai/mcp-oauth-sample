"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  SecurityPanel,
  LoadingSkeleton,
  DashboardHeader,
  StatusBadge,
  OAuthOverview,
  OAuthSecurityPanel,
  OAuthClientActivity,
  TokenExpiration,
  GrantTypeDistribution,
  ToolUsagePanel
} from "@/components/analytics"
import {
  BarChart3,
  Activity,
  AlertTriangle,
  Zap,
} from "lucide-react"

export default function AnalyticsPage() {
  const [data, setData] = useState<{
    performance?: {
      totalRequests: number
      avgResponseTime: number
      p95ResponseTime: number
      errorRate: number
    }
    oauth?: {
      totalClients: number
      activeTokens: number
      tokenRefreshRate: number
      pkceAdoption: number
      clientGrowth?: string
      tokenGrowth?: string
      refreshGrowth?: string
      pkceGrowth?: string
      clients?: {
        name: string
        clientId: string
        tokenCount: number
        lastActivity: string
        grantType: string
        pkceEnabled: boolean
      }[]
      expiringTokens?: {
        clientName: string
        tokenCount: number
        hoursUntilExpiry: number
      }[]
      grantTypes?: {
        type: string
        count: number
        percentage: number
      }[]
    }
    oauthSecurity?: {
      totalEvents: number
      invalidClientAttempts: number
      invalidGrantAttempts: number
      unauthorizedScopes: number
      events?: {
        clientName: string
        clientId: string
        eventType: string
        severity: string
        count: number
        lastOccurred: string
      }[]
    }
    toolUsage?: {
      tools: {
        toolName: string
        mcpMethod: string
        usageCount: number
        uniqueUsers: number
        avgResponseTime?: number
      }[]
      geographic: {
        country: string
        city?: string
        count: number
        percentage: number
      }[]
      totalCalls: number
      activeUsers: number
    }
    topEndpoints?: { endpoint: string; count: number }[]
    geography?: { country: string; count: number }[]
    security?: {
      eventCount: number
      events?: { timestamp: string; eventType: string; ipAddress: string; clientId?: string; details: string }[]
      byOrganization?: {
        organization: string
        eventType: string
        severity: string
        eventCount: number
        avgRiskScore: number
      }[]
      privilegeEscalations?: {
        userName: string
        userEmail: string
        eventType: string
        riskScore: number
        timestamp: string
        details: Record<string, unknown>
      }[]
    }
    enterprise?: {
      usersByMCPServer?: { userName: string; userEmail: string; mcpServerName: string; mcpServerIdentifier: string }[]
      toolUsage?: { toolName: string; mcpMethod: string; usageCount: number; uniqueUsers: number }[]
    }
    lastUpdated?: string
    timeRange?: string
  } | null>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [timeRange, setTimeRange] = useState("24")

  const fetchAnalytics = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/analytics?hours=${timeRange}`)
      if (!response.ok) {
        throw new Error("Failed to fetch analytics")
      }
      const analyticsData = await response.json()
      setData(analyticsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [timeRange])

  const generateTestEvents = async () => {
    try {
      const eventTypes = ["AUTH_FAILURE", "INVALID_TOKEN", "SUSPICIOUS_ACTIVITY", "RATE_LIMIT_EXCEEDED"]
      for (const eventType of eventTypes) {
        await fetch("/api/test/security-events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventType, count: 2 }),
        })
      }
      alert("Test security events generated! Refresh data in 30 seconds to see them.")
    } catch (error) {
      console.error("Failed to generate test events:", error)
      alert("Failed to generate test events")
    }
  }

  useEffect(() => {
    fetchAnalytics()
  }, [timeRange, fetchAnalytics])


  const getHealthStatus = () => {
    if (!data?.performance && !data?.oauth) return { status: "unknown", color: "bg-muted" }
    
    let criticalIssues = 0
    let warningIssues = 0
    
    // Check performance health
    if (data?.performance) {
      const { errorRate, avgResponseTime } = data.performance
      if (errorRate > 5 || avgResponseTime > 1000) criticalIssues++
      else if (errorRate > 1 || avgResponseTime > 500) warningIssues++
    }
    
    // Check OAuth security health
    if (data?.oauthSecurity) {
      const { invalidClientAttempts, invalidGrantAttempts, unauthorizedScopes } = data.oauthSecurity
      if (invalidClientAttempts > 10 || invalidGrantAttempts > 20) criticalIssues++
      else if (invalidClientAttempts > 5 || invalidGrantAttempts > 10 || unauthorizedScopes > 5) warningIssues++
    }
    
    // Check PKCE adoption
    if (data?.oauth && data.oauth.pkceAdoption < 50) warningIssues++
    
    if (criticalIssues > 0) return { status: "critical", color: "bg-destructive" }
    if (warningIssues > 0) return { status: "warning", color: "bg-yellow-500" }
    return { status: "healthy", color: "bg-green-500" }
  }

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-background border border-destructive rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-6">
          <AlertTriangle className="w-16 h-16 text-destructive mx-auto" />
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Dashboard Error</h2>
            <p className="text-muted-foreground">{error}</p>
          </div>
          <Button onClick={fetchAnalytics} className="w-full">
            <Activity className="w-4 h-4 mr-2" />
            Retry Connection
          </Button>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-background border border-border rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-6">
          <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto" />
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">No Data Available</h3>
            <p className="text-muted-foreground">No analytics data found for the selected period.</p>
          </div>
        </div>
      </div>
    )
  }

  const healthStatus = getHealthStatus()

  return (
    <main className="min-h-screen bg-background" aria-labelledby="dashboard-title">
      {/* Dashboard Header */}
      <DashboardHeader
        title="MCP OAuth Analytics"
        lastUpdated={data.lastUpdated}
        timeRange={data.timeRange}
        status={healthStatus.status as "healthy" | "warning" | "critical"}
        serverName={data.enterprise?.usersByMCPServer?.[0]?.mcpServerName}
        serverUrl={data.enterprise?.usersByMCPServer?.[0]?.mcpServerIdentifier}
      >
        <StatusBadge status={healthStatus.status as "healthy" | "warning" | "critical"} />
        <label htmlFor="time-range-select" className="sr-only">
          Time Range
        </label>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger id="time-range-select" className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Last 1 hour</SelectItem>
            <SelectItem value="6">Last 6 hours</SelectItem>
            <SelectItem value="24">Last 24 hours</SelectItem>
            <SelectItem value="72">Last 3 days</SelectItem>
            <SelectItem value="168">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={fetchAnalytics} size="default">
          <Activity className="w-4 h-4 mr-2" />
          Refresh
        </Button>
        <Button
          onClick={generateTestEvents}
          variant="outline"
          size="default"
          className="text-destructive border-destructive/20 hover:bg-destructive/10"
        >
          <Zap className="w-4 h-4 mr-2" />
          Generate Test Events
        </Button>
      </DashboardHeader>

      <div className="container mx-auto px-6 py-8 max-w-7xl space-y-8">

        {/* OAuth Overview */}
        {data.oauth && (
          <OAuthOverview
            totalClients={data.oauth.totalClients}
            activeTokens={data.oauth.activeTokens}
            tokenRefreshRate={data.oauth.tokenRefreshRate}
            pkceAdoption={data.oauth.pkceAdoption}
            clientGrowth={data.oauth.clientGrowth}
            tokenGrowth={data.oauth.tokenGrowth}
            refreshGrowth={data.oauth.refreshGrowth}
            pkceGrowth={data.oauth.pkceGrowth}
          />
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - OAuth Client Management */}
          <div className="space-y-8">
            {/* OAuth Client Activity */}
            {data.oauth?.clients && data.oauth.clients.length > 0 && (
              <OAuthClientActivity 
                clients={data.oauth.clients}
                title="Active OAuth Clients"
                maxItems={6}
              />
            )}

            {/* Token Expiration Tracking */}
            {data.oauth?.expiringTokens && data.oauth.expiringTokens.length > 0 && (
              <TokenExpiration expiringTokens={data.oauth.expiringTokens} />
            )}

            {/* Grant Type Distribution */}
            {data.oauth?.grantTypes && data.oauth.grantTypes.length > 0 && (
              <GrantTypeDistribution grantTypes={data.oauth.grantTypes} />
            )}
          </div>

          {/* Middle Column - Tool Usage & Geography */}
          <div className="space-y-8">
            {/* Enhanced Tool Usage Panel */}
            {data.toolUsage && (
              <ToolUsagePanel
                toolUsage={data.toolUsage.tools}
                geographicUsage={data.toolUsage.geographic}
                totalCalls={data.toolUsage.totalCalls}
                activeUsers={data.toolUsage.activeUsers}
              />
            )}
          </div>

          {/* Right Column - Security Focus */}
          <div className="space-y-8">
            {/* OAuth Security Panel */}
            {data.oauthSecurity && (
              <OAuthSecurityPanel
                totalEvents={data.oauthSecurity.totalEvents}
                oauthEvents={data.oauthSecurity.events}
                invalidClientAttempts={data.oauthSecurity.invalidClientAttempts}
                invalidGrantAttempts={data.oauthSecurity.invalidGrantAttempts}
                unauthorizedScopes={data.oauthSecurity.unauthorizedScopes}
              />
            )}

            {/* General Security Events (Fallback) */}
            {data.security && !data.oauthSecurity && (
              <SecurityPanel
                eventCount={data.security.eventCount || 0}
                byOrganization={data.security.byOrganization}
                privilegeEscalations={data.security.privilegeEscalations}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
