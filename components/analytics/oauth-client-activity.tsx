import type React from "react"
import { Smartphone, Calendar, TrendingUp } from "lucide-react"
import { DataTable } from "./data-table"

interface OAuthClient {
  name: string
  clientId: string
  tokenCount: number
  lastActivity: string
  grantType: string
  pkceEnabled: boolean
}

interface OAuthClientActivityProps {
  clients: OAuthClient[]
  title?: string
  maxItems?: number
}

export function OAuthClientActivity({ 
  clients, 
  title = "Client Activity",
  maxItems = 6 
}: OAuthClientActivityProps) {
  const formatData = (clients: OAuthClient[]) => {
    return clients.slice(0, maxItems).map(client => ({
      primary: client.name,
      secondary: client.grantType,
      value: `${client.tokenCount} tokens`,
      badge: client.pkceEnabled ? "PKCE" : "Basic",
      badgeVariant: (client.pkceEnabled ? "secondary" : "outline") as "secondary" | "outline"
    }))
  }

  return (
    <DataTable
      title={title}
      icon={Smartphone}
      data={formatData(clients)}
      emptyMessage="No OAuth clients found"
      maxItems={maxItems}
    />
  )
}

interface TokenExpirationProps {
  expiringTokens: {
    clientName: string
    tokenCount: number
    hoursUntilExpiry: number
  }[]
}

export function TokenExpiration({ expiringTokens }: TokenExpirationProps) {
  const formatData = (tokens: typeof expiringTokens) => {
    return tokens.map(token => ({
      primary: token.clientName,
      secondary: `${token.hoursUntilExpiry}h remaining`,
      value: `${token.tokenCount} tokens`,
      badge: token.hoursUntilExpiry < 1 ? "Critical" : token.hoursUntilExpiry < 24 ? "Warning" : "Normal",
      badgeVariant: (token.hoursUntilExpiry < 1 ? "destructive" : token.hoursUntilExpiry < 24 ? "outline" : "secondary") as "destructive" | "outline" | "secondary"
    }))
  }

  return (
    <DataTable
      title="Token Expiration"
      icon={Calendar}
      data={formatData(expiringTokens)}
      emptyMessage="No expiring tokens"
      maxItems={5}
    />
  )
}

interface GrantTypeDistributionProps {
  grantTypes: {
    type: string
    count: number
    percentage: number
  }[]
}

export function GrantTypeDistribution({ grantTypes }: GrantTypeDistributionProps) {
  const formatData = (grants: typeof grantTypes) => {
    return grants.map(grant => ({
      primary: grant.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      secondary: `${grant.percentage}% of total`,
      value: grant.count.toLocaleString(),
      badge: grant.type === 'authorization_code' ? "Standard" : grant.type === 'refresh_token' ? "Refresh" : "Other"
    }))
  }

  return (
    <DataTable
      title="Grant Type Usage"
      icon={TrendingUp}
      data={formatData(grantTypes)}
      emptyMessage="No grant data available"
      maxItems={4}
    />
  )
}