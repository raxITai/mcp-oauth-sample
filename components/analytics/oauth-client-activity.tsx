import type React from "react"
import { TrendingUp, Users, Key } from "lucide-react"
import { DataTable } from "./data-table"

interface OAuthClient {
  name: string
  clientId: string
  uniqueUsers: number
  activeTokens: number
  recentRequests: number
  lastActivity: string
  userNames: string
  status: string
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
      secondary: `${client.uniqueUsers} user${client.uniqueUsers !== 1 ? 's' : ''} • ${client.userNames}`,
      value: `${client.recentRequests} requests`,
      badge: client.status,
      badgeVariant: (client.status === "Active" ? "default" : "outline") as "default" | "outline"
    }))
  }

  return (
    <DataTable
      title={title}
      subtitle="OAuth clients with active user sessions"
      icon={Users}
      data={formatData(clients)}
      emptyMessage="No active clients"
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
  const formatTimeRemaining = (hours: number) => {
    if (hours < 1) {
      const minutes = Math.floor(hours * 60)
      const seconds = Math.floor((hours * 60 - minutes) * 60)
      return `${minutes}m ${seconds}s remaining`
    } else if (hours < 24) {
      const wholeHours = Math.floor(hours)
      const minutes = Math.floor((hours - wholeHours) * 60)
      return `${wholeHours}h ${minutes}m remaining`
    } else {
      const days = Math.floor(hours / 24)
      const remainingHours = Math.floor(hours % 24)
      return `${days}d ${remainingHours}h remaining`
    }
  }

  const getBadgeText = (hours: number) => {
    if (hours < 0.5) return "About to expire"
    if (hours < 1) return "Expiring soon"
    if (hours < 24) return "Expires today"
    return "Active"
  }

  const formatData = (tokens: typeof expiringTokens) => {
    return tokens.map(token => ({
      primary: token.clientName,
      secondary: formatTimeRemaining(token.hoursUntilExpiry),
      value: `${token.tokenCount} tokens`,
      badge: getBadgeText(token.hoursUntilExpiry),
      badgeVariant: (token.hoursUntilExpiry < 1 ? "destructive" : token.hoursUntilExpiry < 24 ? "outline" : "default") as "destructive" | "outline" | "default"
    }))
  }

  return (
    <DataTable
      title="Token Expiration"
      subtitle="Access tokens nearing expiration"
      icon={Key}
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
      badge: grant.type === 'authorization_code' ? "Standard" : grant.type === 'refresh_token' ? "Refresh" : "Other",
      badgeVariant: (grant.type === 'authorization_code' ? "default" : "outline") as "default" | "outline"
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