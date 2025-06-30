import type React from "react"
import { CheckCircle, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"


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

interface SecurityPanelProps {
  eventCount: number
  byOrganization?: SecurityEventsByOrg[]
  privilegeEscalations?: PrivilegeEscalation[]
  className?: string
}

function getSeverityColor(severity: string) {
  switch (severity.toLowerCase()) {
    case "low":
      return "bg-green-50 text-green-700 border-green-200"
    case "medium":
      return "bg-yellow-50 text-yellow-700 border-yellow-200"
    case "high":
      return "bg-orange-50 text-orange-700 border-orange-200"
    case "critical":
      return "bg-red-50 text-destructive border-red-200"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export function SecurityPanel({
  eventCount,
  byOrganization = [],
  privilegeEscalations = [],
  className
}: SecurityPanelProps) {
  const isSecure = eventCount === 0

  return (
    <section 
      className={cn("bg-background border border-border rounded-lg shadow-sm", className)}
      aria-labelledby="security-monitor-title"
      role="region"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <h3 
          className="flex items-center gap-3 text-lg font-semibold text-foreground"
          id="security-monitor-title"
        >
          <div className="p-2 bg-muted rounded-lg" aria-hidden="true">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          Security Monitor
        </h3>
      </div>

      <div className="px-6 pb-6 space-y-8">
        {/* Security Overview */}
        <div 
          className={cn(
            "p-6 rounded-lg border-2",
            isSecure 
              ? "bg-green-50 border-green-200" 
              : "bg-red-50 border-red-200"
          )}
          role="status"
          aria-live="polite"
          aria-label={`Security status: ${isSecure ? 'secure' : 'alert'}, ${eventCount} security events`}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-base text-muted-foreground" id="security-events-label">
                Total Security Events
              </p>
              <p 
                className="text-3xl font-bold text-foreground"
                aria-labelledby="security-events-label"
              >
                {eventCount}
              </p>
            </div>
            {isSecure ? (
              <CheckCircle 
                className="w-10 h-10 text-green-500" 
                aria-label="Secure status indicator"
              />
            ) : (
              <AlertTriangle 
                className="w-10 h-10 text-destructive" 
                aria-label="Security alert indicator"
              />
            )}
          </div>
        </div>

        {/* Security Events by Organization */}
        {byOrganization.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Security Events</h4>
            <div className="space-y-3">
              {byOrganization.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-red-50 rounded-lg border border-red-200 space-y-3"
                >
                  <div className="flex justify-between items-start gap-4">
                    <p className="font-medium text-base text-foreground">{item.organization}</p>
                    <span className={cn(
                      "px-2 py-1 rounded text-xs font-medium border",
                      getSeverityColor(item.severity)
                    )}>
                      {item.severity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="font-mono bg-background px-3 py-2 rounded border">
                      {item.eventType}
                    </span>
                    <div className="text-right space-y-1">
                      <div>{item.eventCount} events</div>
                      <div>Risk: {item.avgRiskScore}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Privilege Escalations */}
        {privilegeEscalations.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-foreground">Privilege Escalations</h4>
            <div className="space-y-3">
              {privilegeEscalations.slice(0, 3).map((item, index) => (
                <div key={index} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex justify-between items-start gap-6">
                    <div className="min-w-0 flex-1 space-y-2">
                      <p className="font-medium text-base text-foreground truncate">{item.userName}</p>
                      <p className="text-sm text-muted-foreground font-mono truncate">{item.userEmail}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground space-y-1 shrink-0">
                      <div className="font-semibold">Risk: {item.riskScore}</div>
                      <div>{new Date(item.timestamp).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Clear State */}
        {isSecure && (
          <div 
            className="text-center py-8 space-y-4"
            role="status"
            aria-live="polite"
          >
            <CheckCircle 
              className="w-16 h-16 text-green-500 mx-auto" 
              aria-hidden="true"
            />
            <div className="space-y-2">
              <p className="text-base text-green-600 font-medium">All Clear</p>
              <p className="text-sm text-muted-foreground">No security events detected</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}