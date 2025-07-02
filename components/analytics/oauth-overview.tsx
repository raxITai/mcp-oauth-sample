import type React from "react"
import { Key, Users, RefreshCw, UserCheck } from "lucide-react"
import { MetricCard } from "./metric-card"

interface OAuthOverviewProps {
  totalUsers: number
  activeUsers: number
  totalClients: number
  activeTokens: number
  recentAuthorizations: number
  tokenRefreshRate: number
  userActivity?: string
}

export function OAuthOverview({
  totalUsers,
  activeUsers,
  totalClients,
  activeTokens,
  recentAuthorizations,
  tokenRefreshRate,
  userActivity
}: OAuthOverviewProps) {
  const userActivityRate = totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0;
  
  return (
    <section aria-labelledby="oauth-overview-title" className="space-y-6">
      <h2 id="oauth-overview-title" className="sr-only">
        MCP OAuth Server Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Users"
          value={totalUsers.toLocaleString()}
          icon={Users}
          variant="secondary"
          change={userActivity}
          changeType={userActivityRate >= 70 ? "positive" : userActivityRate >= 30 ? "neutral" : "negative"}
          subtitle="authorized MCP access"
        />
        <MetricCard
          title="Active Users"
          value={activeUsers.toLocaleString()}
          icon={UserCheck}
          variant="secondary"
          change={`${userActivityRate}% active`}
          changeType={userActivityRate >= 70 ? "positive" : userActivityRate >= 30 ? "neutral" : "negative"}
          subtitle="with valid tokens"
        />
        <MetricCard
          title="Active Tokens"
          value={activeTokens.toLocaleString()}
          icon={Key}
          variant="secondary"
          change={`${totalClients} clients`}
          changeType="neutral"
          subtitle="valid access tokens"
        />
        <MetricCard
          title="Recent Authorizations"
          value={recentAuthorizations.toLocaleString()}
          icon={RefreshCw}
          variant="secondary"
          change={`${Math.round(tokenRefreshRate * 100) / 100}/h refreshes`}
          changeType={recentAuthorizations > 0 ? "positive" : "neutral"}
          subtitle="new OAuth flows"
        />
      </div>
    </section>
  )
}