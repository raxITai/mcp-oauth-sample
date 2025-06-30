"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MetricCard,
  DataTable,
  SecurityPanel,
  LoadingSkeleton,
  DashboardHeader,
  StatusBadge
} from "@/components/analytics"
import {
  BarChart3,
  Globe,
  Users,
  Activity,
  Clock,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Server,
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
    if (!data?.performance) return { status: "unknown", color: "bg-muted" }
    const { errorRate, avgResponseTime } = data.performance
    if (errorRate > 5 || avgResponseTime > 1000) return { status: "critical", color: "bg-destructive" }
    if (errorRate > 1 || avgResponseTime > 500) return { status: "warning", color: "bg-yellow-500" }
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

        {/* Performance Overview */}
        {data.performance && (
          <section aria-labelledby="performance-title" className="space-y-6">
            <h2 id="performance-title" className="sr-only">
              Performance Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Total Requests"
                value={data.performance.totalRequests.toLocaleString()}
                icon={BarChart3}
                color="blue"
                change="+12.5%"
                changeType="positive"
                subtitle="vs last period"
              />
              <MetricCard
                title="Avg Response"
                value={`${data.performance.avgResponseTime}ms`}
                icon={Clock}
                color="green"
                change={data.performance.avgResponseTime < 200 ? "-8%" : "+15%"}
                changeType={data.performance.avgResponseTime < 200 ? "positive" : "negative"}
                subtitle="response time"
              />
              <MetricCard
                title="P95 Response"
                value={`${data.performance.p95ResponseTime}ms`}
                icon={TrendingUp}
                color="purple"
                change="+3.2%"
                changeType="neutral"
                subtitle="95th percentile"
              />
              <MetricCard
                title="Error Rate"
                value={`${data.performance.errorRate}%`}
                icon={data.performance.errorRate > 5 ? AlertTriangle : CheckCircle}
                color={data.performance.errorRate > 5 ? "red" : "green"}
                change={data.performance.errorRate > 5 ? "+2.1%" : "-0.5%"}
                changeType={data.performance.errorRate > 5 ? "negative" : "positive"}
                subtitle="error percentage"
              />
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Endpoints & Geography */}
          <div className="space-y-8">
            {/* Top Endpoints */}
            {data.topEndpoints && data.topEndpoints.length > 0 && (
              <DataTable
                title="Popular Endpoints"
                icon={Server}
                data={data.topEndpoints.map(endpoint => ({
                  primary: endpoint.endpoint,
                  value: endpoint.count
                }))}
                emptyMessage="No endpoint data available"
              />
            )}

            {/* Geographic Distribution */}
            {data.geography && data.geography.length > 0 && (
              <DataTable
                title="Geographic Distribution"
                icon={Globe}
                data={data.geography.map(country => ({
                  primary: country.country,
                  value: country.count
                }))}
                emptyMessage="No geographic data available"
              />
            )}
          </div>

          {/* Middle Column - Enterprise Analytics */}
          <div className="space-y-8">
            {/* MCP Server Usage */}
            {data.enterprise?.usersByMCPServer && data.enterprise.usersByMCPServer.length > 0 && (
              <DataTable
                title="Active MCP Servers"
                icon={Users}
                data={data.enterprise.usersByMCPServer.map(item => ({
                  primary: item.userName,
                  secondary: item.userEmail,
                  value: item.mcpServerName,
                  badge: item.mcpServerIdentifier.substring(0, 8) + "..."
                }))}
                emptyMessage="No MCP server data available"
                maxItems={3}
              />
            )}

            {/* Tool Usage */}
            {data.enterprise?.toolUsage && data.enterprise.toolUsage.length > 0 && (
              <DataTable
                title="Popular Tools"
                icon={Activity}
                data={data.enterprise.toolUsage.map(tool => ({
                  primary: tool.toolName,
                  secondary: tool.mcpMethod,
                  value: `${tool.usageCount} calls`,
                  badge: `${tool.uniqueUsers} users`
                }))}
                emptyMessage="No tool usage data available"
                maxItems={4}
              />
            )}
          </div>

          {/* Right Column - Security */}
          <div className="space-y-8">
            {data.security && (
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
