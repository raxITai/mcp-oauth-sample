"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  SecurityPanel,
  LoadingSkeleton,
  DashboardHeader,
  OAuthOverview,
  OAuthClientActivity,
  TokenExpiration,
  ToolUsagePanel,
  GrantTypeChart,
  ToolResponseAreaChart
} from "@/components/analytics"
import {
  BarChart3,
  Activity,
  AlertTriangle,
  Zap,
  ChevronDown,
  ChevronUp,
  Shield,
  TrendingUp,
  Users
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
      totalUsers: number
      activeUsers: number
      totalClients: number
      activeClients: number
      activeTokens: number
      recentAuthorizations: number
      tokenRefreshRate: number
      pkceAdoption: number
      userActivity?: string
      clientActivity?: string
      clients?: {
        name: string
        clientId: string
        uniqueUsers: number
        activeTokens: number
        recentRequests: number
        lastActivity: string
        userNames: string
        status: string
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
      timeSeries?: {
        hour: string
        toolName: string
        avgResponseTime: number
        callCount: number
        p95ResponseTime: number
        p50ResponseTime: number
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
  const [expandedSections, setExpandedSections] = useState({
    oauth: true,
    security: false,
    tools: false
  })

  const fetchAnalytics = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/analytics?hours=${timeRange}`, {
        credentials: 'include'
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch analytics")
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
      // Use the SecurityMonitor directly for more realistic threat detection
      const response = await fetch("/api/analytics/generate-threats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          runDetection: true,
          mockScenarios: [
            "privilege_escalation",
            "token_reuse", 
            "rate_limit_exceeded",
            "oauth_pkce_bypass"
          ]
        }),
      })
      
      if (!response.ok) {
        throw new Error("Failed to generate threats")
      }
      
      const result = await response.json()
      alert(`Generated ${result.threatsDetected || 0} realistic security threats using SecurityMonitor! Refresh to see them.`)
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
    
    
    // Check PKCE adoption
    if (data?.oauth && data.oauth.pkceAdoption < 50) warningIssues++
    
    if (criticalIssues > 0) return { status: "critical", color: "bg-destructive" }
    if (warningIssues > 0) return { status: "warning", color: "bg-secondary-300" }
    return { status: "healthy", color: "bg-primary-300" }
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

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const getAlertSummary = () => {
    const alerts = []
    
    
    if (data?.performance) {
      const { errorRate, avgResponseTime } = data.performance
      if (errorRate > 5) alerts.push({ type: 'critical', message: `${errorRate}% error rate` })
      if (avgResponseTime > 1000) alerts.push({ type: 'warning', message: `${avgResponseTime}ms avg response time` })
    }
    
    if (data?.oauth && data.oauth.pkceAdoption < 50) {
      alerts.push({ type: 'warning', message: `${data.oauth.pkceAdoption}% PKCE adoption` })
    }
    
    return alerts
  }

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

      <div className="container mx-auto px-6 py-6 max-w-7xl space-y-6">

        {/* Priority Alert Bar */}
        {data && getAlertSummary().length > 0 && (
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <CardTitle className="text-lg text-destructive">Active Alerts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {getAlertSummary().map((alert, index) => (
                  <Badge 
                    key={index}
                    variant={alert.type === 'critical' ? 'destructive' : 'secondary'}
                    className="text-xs"
                  >
                    {alert.message}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Section 1: OAuth Information */}
        <Collapsible open={expandedSections.oauth} onOpenChange={() => toggleSection('oauth')}>
          <Card className="border-primary-300 dark:border-primary-600">
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-600/10 rounded-lg">
                      <Users className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">OAuth Metrics</CardTitle>
                      <CardDescription>Authentication and client management</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {data?.oauth && (
                      <Badge variant="outline" className="text-xs">
                        {data.oauth.activeUsers} active users
                      </Badge>
                    )}
                    {expandedSections.oauth ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0 space-y-4">
                {data?.oauth && (
                  <OAuthOverview
                    totalUsers={data.oauth.totalUsers}
                    activeUsers={data.oauth.activeUsers}
                    totalClients={data.oauth.totalClients}
                    activeTokens={data.oauth.activeTokens}
                    recentAuthorizations={data.oauth.recentAuthorizations}
                    tokenRefreshRate={data.oauth.tokenRefreshRate}
                    userActivity={data.oauth.userActivity}
                  />
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <OAuthClientActivity 
                    clients={data?.oauth?.clients || []}
                    title="Client Activity"
                    maxItems={6}
                  />
                  <TokenExpiration expiringTokens={data?.oauth?.expiringTokens || []} />
                  {data?.oauth?.grantTypes && data.oauth.grantTypes.length > 0 && (
                    <GrantTypeChart grantTypes={data.oauth.grantTypes} />
                  )}
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Section 2: Security */}
        <Collapsible open={expandedSections.security} onOpenChange={() => toggleSection('security')}>
          <Card className="border-destructive/20 dark:border-destructive/40">
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <Shield className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Security Overview</CardTitle>
                      <CardDescription>Critical security events and monitoring</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {expandedSections.security ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0">
                {/* Real-time Security Analytics Panel with comprehensive threat detection */}
                <SecurityPanel />
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Section 3: MCP Tools & Performance */}
        <Collapsible open={expandedSections.tools} onOpenChange={() => toggleSection('tools')}>
          <Card className="border-secondary-300 dark:border-secondary-600">
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary-600/10 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Performance & Tools</CardTitle>
                      <CardDescription>Tool usage and response metrics</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {data?.toolUsage && (
                      <Badge variant="outline" className="text-xs">
                        {data.toolUsage.totalCalls} calls
                      </Badge>
                    )}
                    {expandedSections.tools ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0">
                {data?.toolUsage && (
                  <div className="space-y-6">
                    {/* Tool Usage Panel - Handles overview, tools list, and geographic data */}
                    <ToolUsagePanel
                      toolUsage={data.toolUsage.tools}
                      geographicUsage={data.toolUsage.geographic}
                      totalCalls={data.toolUsage.totalCalls}
                      activeUsers={data.toolUsage.activeUsers}
                    />
                    
                    {/* Time Series Charts */}
                    {data.toolUsage.timeSeries && data.toolUsage.timeSeries.length > 0 && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <ToolResponseAreaChart 
                          data={data.toolUsage.timeSeries}
                          hoursBack={parseInt(timeRange)}
                          title="Response Times (Last 12 Hours)"
                          icon={TrendingUp}
                        />
                        <ToolResponseAreaChart 
                          data={data.toolUsage.timeSeries.slice(-12)}
                          hoursBack={12}
                          title="Recent Response Times"
                          description="Response times over the last 12 hours"
                          icon={Activity}
                        />
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </main>
  )
}
