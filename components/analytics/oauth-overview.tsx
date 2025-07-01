import type React from "react"
import { Key, Users, RefreshCw, Shield } from "lucide-react"
import { MetricCard } from "./metric-card"

interface OAuthOverviewProps {
  totalClients: number
  activeTokens: number
  tokenRefreshRate: number
  pkceAdoption: number
  clientGrowth?: string
  tokenGrowth?: string
  refreshGrowth?: string
  pkceGrowth?: string
}

export function OAuthOverview({
  totalClients,
  activeTokens,
  tokenRefreshRate,
  pkceAdoption,
  clientGrowth = "+0%",
  tokenGrowth = "+0%",
  refreshGrowth = "+0%",
  pkceGrowth = "+0%"
}: OAuthOverviewProps) {
  return (
    <section aria-labelledby="oauth-overview-title" className="space-y-6">
      <h2 id="oauth-overview-title" className="sr-only">
        OAuth Server Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Registered Clients"
          value={totalClients.toLocaleString()}
          icon={Users}
          variant="primary"
          change={clientGrowth}
          changeType={clientGrowth.startsWith('+') ? "positive" : clientGrowth.startsWith('-') ? "negative" : "neutral"}
          subtitle="OAuth applications"
        />
        <MetricCard
          title="Active Tokens"
          value={activeTokens.toLocaleString()}
          icon={Key}
          variant="primary"
          change={tokenGrowth}
          changeType={tokenGrowth.startsWith('+') ? "positive" : tokenGrowth.startsWith('-') ? "negative" : "neutral"}
          subtitle="valid access tokens"
        />
        <MetricCard
          title="Token Refreshes"
          value={`${tokenRefreshRate}/h`}
          icon={RefreshCw}
          variant="secondary"
          change={refreshGrowth}
          changeType={refreshGrowth.startsWith('+') ? "positive" : refreshGrowth.startsWith('-') ? "negative" : "neutral"}
          subtitle="per hour"
        />
        <MetricCard
          title="PKCE Adoption"
          value={`${pkceAdoption}%`}
          icon={Shield}
          variant="secondary"
          change={pkceGrowth}
          changeType={pkceAdoption >= 80 ? "positive" : pkceAdoption >= 50 ? "neutral" : "negative"}
          subtitle="security compliance"
        />
      </div>
    </section>
  )
}