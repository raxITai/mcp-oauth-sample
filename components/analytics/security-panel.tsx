import type React from "react"
import { CheckCircle, AlertTriangle, Shield, TrendingUp, RefreshCw, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SecurityEventsByOrg {
  organization: string
  eventType: string
  severity: string
  eventCount: number
  avgRiskScore: number
}

interface PrivilegeEscalation {
  userName: string
  userEmail: string
  eventType: string
  riskScore: number
  timestamp: string
  details: Record<string, unknown>
}

interface SecurityAnalytics {
  totalEvents: number
  eventsByOrganization: SecurityEventsByOrg[]
  privilegeEscalations: PrivilegeEscalation[]
  criticalEvents: number
  highRiskEvents: number
  resolvedEvents: number
  averageRiskScore: number
}

interface SecurityPanelProps {
  className?: string
  securityData?: SecurityAnalytics
}

function getSeverityBadgeVariant(severity: string): "default" | "secondary" | "destructive" | "outline" {
  switch (severity.toLowerCase()) {
    case "low":
      return "outline"
    case "medium":
      return "secondary"
    case "high":
      return "destructive"
    case "critical":
      return "destructive"
    default:
      return "outline"
  }
}

export function SecurityPanel({ className, securityData }: SecurityPanelProps) {
  const [analytics, setAnalytics] = useState<SecurityAnalytics | null>(securityData || null)
  const [loading, setLoading] = useState(!securityData)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(securityData ? new Date() : null)

  const fetchSecurityAnalytics = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/analytics/security?days=30')
      if (!response.ok) {
        throw new Error('Failed to fetch security analytics')
      }
      
      const result = await response.json()
      if (result.success) {
        setAnalytics(result.data)
        setLastUpdated(new Date())
      } else {
        throw new Error(result.error || 'Unknown error')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      console.error('Security analytics fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (securityData) {
      setAnalytics(securityData)
      setLastUpdated(new Date())
      setLoading(false)
      setError(null)
    } else {
      fetchSecurityAnalytics()
    }
    // Refresh every 5 minutes only if no prefetched data
    if (!securityData) {
      const interval = setInterval(fetchSecurityAnalytics, 5 * 60 * 1000)
      return () => clearInterval(interval)
    }
  }, [securityData])

  const isSecure = analytics?.totalEvents === 0
  const hasSecurityEvents = (analytics?.eventsByOrganization.length || 0) > 0
  const hasPrivilegeEscalations = (analytics?.privilegeEscalations.length || 0) > 0

  if (loading && !analytics) {
    return (
      <div className={className}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <RefreshCw className="w-3 h-3 animate-spin" />
            <span>Loading security analytics...</span>
          </div>
          {lastUpdated && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>Updated {lastUpdated.toLocaleTimeString()}</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-background border border-border rounded-lg shadow-sm p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
                <div className="h-20 bg-muted rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={className}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs text-destructive">
            <span>Error: {error}</span>
            <button 
              onClick={fetchSecurityAnalytics}
              className="ml-2 px-2 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90"
            >
              Retry
            </button>
          </div>
          {lastUpdated && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>Updated {lastUpdated.toLocaleTimeString()}</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-background border border-destructive/20 rounded-lg shadow-sm p-6">
              <div className="text-center text-destructive">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">Failed to load</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div 
      className={className}
      aria-labelledby="security-monitor-title"
      role="region"
    >
      {/* Header with refresh functionality */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {/* <span>Security data</span> */}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {lastUpdated && (
            <>
              <Clock className="w-3 h-3" />
              <span>Updated {lastUpdated.toLocaleTimeString()}</span>
            </>
          )}
          <button 
            onClick={fetchSecurityAnalytics}
            className="p-1 hover:bg-muted rounded"
            disabled={loading}
          >
            <RefreshCw className={cn("w-3 h-3", loading && "animate-spin")} />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Three Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Security Overview */}
          <div className="bg-background border border-border rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">Security Overview</h3>
                <p className="text-sm text-muted-foreground">
                  {analytics?.totalEvents || 0} total events • {analytics?.averageRiskScore || 0} avg risk
                </p>
              </div>
              <div className="p-3 rounded-xl bg-secondary-300 text-secondary-600" aria-hidden="true">
              <Shield className="w-6 h-6" />
              </div>
            </div>
            
            {/* Status and Key Metrics */}
            <div className="space-y-4">
              <div 
                className={cn(
                  "p-4 rounded-lg border text-center",
                  isSecure 
                    ? "bg-primary/5 border-primary/20" 
                    : "bg-destructive/5 border-destructive/20"
                )}
                role="status"
                aria-live="polite"
              >
                {isSecure ? (
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                ) : (
                  <AlertTriangle className="w-8 h-8 text-destructive mx-auto mb-2" />
                )}
                <div className={cn(
                  "text-sm font-medium mb-1",
                  isSecure ? "text-primary" : "text-destructive"
                )}>
                  {isSecure ? "All Systems Secure" : "Security Alerts"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {isSecure ? "No threats detected" : `${analytics?.totalEvents || 0} events require attention`}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-lg font-bold text-destructive">{analytics?.criticalEvents || 0}</div>
            <div className="text-xs text-muted-foreground">Critical</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-lg font-bold text-secondary">{analytics?.highRiskEvents || 0}</div>
            <div className="text-xs text-muted-foreground">High Risk</div>
          </div>
              </div>
            </div>
          </div>

          {/* Card 2: Recent Security Events */}
          <div className="bg-background border border-border rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">Recent Events</h3>
                <p className="text-sm text-muted-foreground">
                  Latest security incidents
                </p>
              </div>
              <div className="p-3 rounded-xl bg-secondary-300 text-secondary-600" aria-hidden="true">
              <AlertTriangle className="w-6 h-6" />
              </div>
            </div>
            
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {hasSecurityEvents ? (
                analytics?.eventsByOrganization.slice(0, 3).map((item, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg border">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="text-sm font-medium text-foreground truncate">
                        {item.organization || 'Unknown Org'}
                      </span>
                      <Badge
                        variant={getSeverityBadgeVariant(item.severity)}
                        className="text-xs"
                      >
                        {item.severity}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <Badge variant="outline" className="font-mono text-xs">
                        {item.eventType}
                      </Badge>
                      <div className="text-right">
                        <div>{item.eventCount} events</div>
                        <div>Risk: {item.avgRiskScore}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-sm">No recent events</div>
                  <div className="text-xs">System is secure</div>
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Privilege Escalations */}
          <div className="bg-background border border-border rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">Privilege Escalations</h3>
                <p className="text-sm text-muted-foreground">
                  Critical security escalation attempts
                </p>
              </div>
              <div className="p-3 rounded-xl bg-secondary-300 text-secondary-600" aria-hidden="true">
              <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {hasPrivilegeEscalations ? (
                analytics?.privilegeEscalations.slice(0, 3).map((item, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg border">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-foreground truncate">
                          {item.userName}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono truncate">
                          {item.userEmail}
                        </div>
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-semibold text-destructive">Risk: {item.riskScore}</div>
                        <div className="text-muted-foreground">{new Date(item.timestamp).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-sm">No escalations</div>
                  <div className="text-xs">Permissions secure</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width Collapsible Data Table */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="detailed-security-data"
            className="border border-border rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-destructive" />
                <span className="text-lg font-semibold text-foreground">
                  Detailed Security Data
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  ({(analytics?.eventsByOrganization.length || 0) + (analytics?.privilegeEscalations.length || 0)} total records)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-6">
                
                {/* Security Events Table */}
                {hasSecurityEvents && (
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      Security Events by Organization ({analytics?.eventsByOrganization.length || 0})
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border border-border rounded-lg overflow-hidden">
                        <thead className="bg-muted/30">
                          <tr>
                            <th className="text-left p-3 text-sm font-semibold text-foreground border-b">Organization</th>
                            <th className="text-left p-3 text-sm font-semibold text-foreground border-b">Event Type</th>
                            <th className="text-left p-3 text-sm font-semibold text-foreground border-b">Severity</th>
                            <th className="text-right p-3 text-sm font-semibold text-foreground border-b">Event Count</th>
                            <th className="text-right p-3 text-sm font-semibold text-foreground border-b">Avg Risk Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {analytics?.eventsByOrganization.map((item, index) => (
                            <tr key={index} className="border-b border-border hover:bg-muted/20">
                              <td className="p-3 text-sm text-foreground font-medium">
                                {item.organization || 'Unknown Organization'}
                              </td>
                              <td className="p-3 text-sm text-muted-foreground">
                                <Badge variant="outline" className="font-mono text-xs">
                                  {item.eventType}
                                </Badge>
                              </td>
                              <td className="p-3">
                                <Badge
                                  variant={getSeverityBadgeVariant(item.severity)}
                                  className="text-xs"
                                >
                                  {item.severity}
                                </Badge>
                              </td>
                              <td className="p-3 text-sm text-foreground font-medium text-right">
                                {item.eventCount}
                              </td>
                              <td className="p-3 text-sm text-foreground font-medium text-right">
                                <Badge
                                  variant={
                                    item.avgRiskScore >= 90 ? "destructive" :
                                    item.avgRiskScore >= 70 ? "secondary" :
                                    item.avgRiskScore >= 50 ? "outline" :
                                    "default"
                                  }
                                  className="text-xs"
                                >
                                  {item.avgRiskScore}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Privilege Escalations Table */}
                {hasPrivilegeEscalations && (
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-destructive" />
                      Privilege Escalation Incidents ({analytics?.privilegeEscalations.length || 0})
                    </h4>
                    <div className="space-y-4">
                      {analytics?.privilegeEscalations.map((item, index) => (
                        <div key={index} className="border border-border rounded-lg overflow-hidden">
                          {/* Main row with key information */}
                          <div className="p-4 bg-muted/20 border-b">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-foreground truncate">
                                  {item.userName}
                                </div>
                                <div className="text-xs text-muted-foreground font-mono truncate">
                                  {item.userEmail}
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <Badge variant="outline" className="font-mono text-xs">
                                  {item.eventType}
                                </Badge>
                              </div>
                              <div className="text-sm">
                                <Badge
                                  variant={
                                    item.riskScore >= 90 ? "destructive" :
                                    item.riskScore >= 70 ? "secondary" :
                                    item.riskScore >= 50 ? "outline" :
                                    "default"
                                  }
                                  className="text-xs"
                                >
                                  Risk: {item.riskScore}
                                </Badge>
                              </div>
                              <div className="text-sm text-muted-foreground text-right">
                                {new Date(item.timestamp).toLocaleString()}
                              </div>
                            </div>
                          </div>
                          
                          {/* Details section */}
                          {item.details && (
                            <div className="p-4 bg-background">
                              <h5 className="text-sm font-semibold text-foreground mb-3">Event Details</h5>
                              <div className="space-y-3">
                                
                                
                                
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Clear State */}
                {isSecure && (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-primary">All Systems Secure</h4>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        No security events or privilege escalations detected in the selected time period. 
                        Your OAuth and MCP infrastructure is operating securely.
                      </p>
                                              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <div className="text-xs text-primary font-medium">OAuth Security</div>
                          <div className="text-sm text-muted-foreground mt-1">No invalid tokens or grants</div>
                        </div>
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <div className="text-xs text-primary font-medium">Access Control</div>
                          <div className="text-sm text-muted-foreground mt-1">No privilege escalations</div>
                        </div>
                        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <div className="text-xs text-primary font-medium">MCP Protocol</div>
                          <div className="text-sm text-muted-foreground mt-1">All connections secure</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}