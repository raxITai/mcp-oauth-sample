import type React from "react"
import { Wrench, MapPin, Clock, TrendingUp } from "lucide-react"
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
      return {
        primary: tool.toolName,
        secondary: `${tool.mcpMethod} • ${responseTime}ms avg`,
        value: `${tool.usageCount} calls`,
        badge: responseTime > 1000 ? `SLOW (${responseTime}ms)` : 
               responseTime > 500 ? `${responseTime}ms` : 
               `${responseTime}ms`,
        badgeVariant: (responseTime > 1000 ? "destructive" : 
                      responseTime > 500 ? "outline" : "secondary") as "destructive" | "outline" | "secondary"
      };
    });
  }

  const formatGeoData = (geo: GeographicUsage[]) => {
    return geo.map(location => ({
      primary: location.country,
      secondary: location.city || "Multiple cities",
      value: location.count.toLocaleString(),
      badge: `${location.percentage}%`,
      badgeVariant: "outline" as const
    }))
  }

  return (
    <div className="space-y-8">
      {/* Tool Usage Statistics */}
      <div className="bg-background border border-border rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-full bg-primary-100">
            <Wrench className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Tool Usage Overview</h3>
            <p className="text-sm text-muted-foreground">
              {totalCalls.toLocaleString()} total calls by {activeUsers} active users
            </p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
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

      {/* Popular Tools */}
      {toolUsage.length > 0 && (
        <DataTable
          title="Most Used Tools"
          icon={TrendingUp}
          data={formatToolData(toolUsage)}
          emptyMessage="No tool usage data available"
          maxItems={5}
        />
      )}

      {/* Geographic Distribution */}
      {geographicUsage.length > 0 && (
        <DataTable
          title="Usage by Location"
          icon={MapPin}
          data={formatGeoData(geographicUsage)}
          emptyMessage="No geographic data available"
          maxItems={5}
        />
      )}

      {/* Performance Insights */}
      <div className="bg-background border border-border rounded-lg shadow-sm p-6">
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
      </div>
    </div>
  )
}