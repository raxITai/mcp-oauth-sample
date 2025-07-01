"use client"

import { AnalyticsPieChart } from "./analytics-pie-chart"

interface GrantType {
  type: string
  count: number
  percentage: number
}

interface GrantTypeChartProps {
  grantTypes: GrantType[]
  className?: string
}

export function GrantTypeChart({ grantTypes, className }: GrantTypeChartProps) {
  // Color mapping for grant types
  const getGrantTypeColor = (type: string) => {
    switch (type) {
      case 'authorization_code':
        return "var(--primary-600)"
      case 'refresh_token':
        return "var(--secondary-600)"
      case 'client_credentials':
        return "var(--primary-300)"
      case 'client_registration':
        return "var(--secondary-300)"
      case 'device_code':
        return "var(--base-600)"
      default:
        return "var(--base-400)"
    }
  }

  // Transform grant type data for the pie chart - key is using the original type
  const chartData = grantTypes.map(grant => ({
    grantType: grant.type, // Keep original for config key
    name: formatGrantTypeName(grant.type), // Display name
    value: grant.count,
    percentage: grant.percentage,
    fill: getGrantTypeColor(grant.type)
  }))

  // Custom config for grant types - keys must match data keys
  const grantTypeConfig = grantTypes.reduce((config, grant) => {
    config[grant.type] = {
      label: formatGrantTypeName(grant.type),
      color: getGrantTypeColor(grant.type)
    }
    return config
  }, {} as Record<string, { label: string; color: string }>)

  // Add the main data key config
  grantTypeConfig.value = {
    label: "Count",
    color: "transparent" // Not used for pie charts
  }

  return (
    <AnalyticsPieChart
      title="OAuth Grant Types"
      description="Distribution of OAuth 2.1 grant types used"
      data={chartData}
      config={grantTypeConfig}
      nameKey="grantType" // This should match the data key for legend mapping
      className={className}
    />
  )
}

// Helper function to format grant type names for display
function formatGrantTypeName(type: string): string {
  switch (type) {
    case 'authorization_code':
      return 'Authorization Code'
    case 'refresh_token':
      return 'Refresh Token'
    case 'client_credentials':
      return 'Client Credentials'
    case 'client_registration':
      return 'Client Registration'
    case 'device_code':
      return 'Device Code'
    default:
      // Fallback: capitalize and replace underscores
      return type
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
  }
}