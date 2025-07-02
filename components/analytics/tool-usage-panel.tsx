import type React from "react"
import { Wrench, MapPin, TrendingUp } from "lucide-react"
import { DataTable } from "./data-table"

interface ToolUsage {
  toolName: string
  mcpMethod: string
  usageCount: number
  uniqueUsers: number
  avgResponseTime?: number
  maxResponseTime?: number
  minResponseTime?: number
  errorCount?: number
  errorRate?: number
}

interface GeographicUsage {
  country: string
  city?: string
  count: number
  percentage: number
}

interface ToolUsagePanelProps {
  toolUsage: ToolUsage[]
  geographicUsage: GeographicUsage[]
  totalCalls?: number
  activeUsers?: number
}

export function ToolUsagePanel({ 
  toolUsage, 
  geographicUsage,
  totalCalls = 0,
  activeUsers = 0
}: ToolUsagePanelProps) {
  const formatToolData = (tools: ToolUsage[]) => {
    return tools.map(tool => {
      const responseTime = tool.avgResponseTime || 0;
      const errorRate = tool.errorRate || 0;
      
      // Determine badge variant based on performance
      let badgeVariant: "destructive" | "outline" | "secondary" | "default" = "secondary";
      let badgeText = `${responseTime}ms`;
      
      if (responseTime > 1000) {
        badgeVariant = "destructive";
        badgeText = `SLOW (${responseTime}ms)`;
      } else if (responseTime > 500) {
        badgeVariant = "outline";
      } else if (errorRate > 0.1) {
        badgeVariant = "destructive";
        badgeText = `${errorRate.toFixed(1)}% errors`;
      }

      return {
        primary: tool.toolName,
        secondary: `${tool.mcpMethod} • ${tool.usageCount} calls`,
        value: `${tool.uniqueUsers} users`,
        badge: badgeText,
        badgeVariant: badgeVariant
      };
    });
  }

  const formatGeoData = (geo: GeographicUsage[]) => {
    return geo.map(location => {
      // Determine badge variant based on percentage
      let badgeVariant: "destructive" | "outline" | "secondary" | "default" = "outline";
      
      if (location.percentage >= 50) {
        badgeVariant = "default"; // Primary for high usage
      } else if (location.percentage >= 20) {
        badgeVariant = "secondary"; // Secondary for medium usage
      }

      return {
        primary: location.country,
        secondary: location.city || "Multiple cities",
        value: `${location.count.toLocaleString()} calls`,
        badge: `${location.percentage.toFixed(1)}%`,
        badgeVariant: badgeVariant
      };
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Card 1: Tool Usage Overview */}
      <div className="bg-background border border-border rounded-lg shadow-sm p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-foreground">Tool Usage Overview</h3>
            <p className="text-sm text-muted-foreground">
              {totalCalls.toLocaleString()} total calls by {activeUsers} active users
            </p>
          </div>
          {/* Icon Container - Design System: spacing.3, borderRadius.xl, semantic colors */}
          <div className="p-3 rounded-xl bg-primary-100 text-primary-600" aria-hidden="true">
            <Wrench className="w-6 h-6" />
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-foreground">{toolUsage.length}</div>
            <div className="text-sm text-muted-foreground">Active Tools</div>
          </div>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-foreground">
              {Math.round(totalCalls / (activeUsers || 1))}
            </div>
            <div className="text-sm text-muted-foreground">Calls per User</div>
          </div>
        </div>
      </div>

      {/* Card 2: Popular Tools */}
      <DataTable
        title="Most Used Tools"
        icon={TrendingUp}
        data={toolUsage.length > 0 ? formatToolData(toolUsage) : []}
        emptyMessage="No tool usage data available"
        maxItems={5}
      />

      {/* Card 3: Geographic Distribution */}
      <DataTable
        title="Usage by Location"
        icon={MapPin}
        data={geographicUsage.length > 0 ? formatGeoData(geographicUsage) : []}
        emptyMessage="No geographic data available"
        maxItems={5}
      />

      {/* Performance Insights */}
      {/* <div className="bg-background border border-border rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-primary-100">
            <Clock className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Performance Insights</h4>
            <p className="text-sm text-muted-foreground">Tool response times and efficiency</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {toolUsage.slice(0, 3).map((tool, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <div className="font-medium text-sm text-foreground">{tool.toolName}</div>
                <div className="text-xs text-muted-foreground">{tool.mcpMethod}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-sm text-foreground">
                  {tool.avgResponseTime ? `${tool.avgResponseTime}ms` : 'N/A'}
                </div>
                <div className="text-xs text-muted-foreground">avg response</div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}