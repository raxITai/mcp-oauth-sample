import type React from "react"
import { CheckCircle, AlertTriangle, Shield, Users, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
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

interface SecurityPanelProps {
  eventCount: number
  byOrganization?: SecurityEventsByOrg[]
  privilegeEscalations?: PrivilegeEscalation[]
  className?: string
}

function getSeverityColor(severity: string) {
  switch (severity.toLowerCase()) {
    case "low":
      return "bg-background text-green-600 border-green-500/20"
    case "medium":
      return "bg-background text-yellow-600 border-yellow-500/20"
    case "high":
      return "bg-background text-orange-600 border-orange-500/20"
    case "critical":
      return "bg-background text-destructive border-destructive/20"
    default:
      return "bg-background text-muted-foreground border-border"
  }
}

export function SecurityPanel({
  eventCount,
  byOrganization = [],
  privilegeEscalations = [],
  className
}: SecurityPanelProps) {
  const isSecure = eventCount === 0
  const hasSecurityEvents = byOrganization.length > 0
  const hasPrivilegeEscalations = privilegeEscalations.length > 0

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
            <Shield className="w-5 h-5 text-destructive" />
          </div>
          Security Monitor
        </h3>
      </div>

      <div className="px-6 pb-6 space-y-6">
        {/* Security Overview - Always visible */}
        <div 
          className={cn(
            "p-6 rounded-lg border",
            isSecure 
              ? "bg-muted border-border" 
              : "bg-muted border-border"
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

        {/* Accordion for detailed security information */}
        {(hasSecurityEvents || hasPrivilegeEscalations || isSecure) && (
          <Accordion type="single" collapsible className="space-y-2">
            
            {/* Security Events Accordion Item */}
            {hasSecurityEvents && (
              <AccordionItem
                value="security-events"
                className="border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <span className="text-base font-semibold text-foreground">
                      Security Events ({byOrganization.length})
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3">
                    {byOrganization.slice(0, 4).map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-muted rounded-lg border border-border space-y-3"
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
                </AccordionContent>
              </AccordionItem>
            )}

            {/* Privilege Escalations Accordion Item */}
            {hasPrivilegeEscalations && (
              <AccordionItem
                value="privilege-escalations"
                className="border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    <span className="text-base font-semibold text-foreground">
                      Privilege Escalations ({privilegeEscalations.length})
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3">
                    {privilegeEscalations.slice(0, 3).map((item, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg border border-border">
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
                </AccordionContent>
              </AccordionItem>
            )}

            {/* All Clear Accordion Item */}
            {isSecure && (
              <AccordionItem
                value="all-clear"
                className="border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-base font-semibold text-foreground">
                      Security Status Details
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="text-center py-6 space-y-4">
                    <CheckCircle 
                      className="w-12 h-12 text-green-500 mx-auto" 
                      aria-hidden="true"
                    />
                    <div className="space-y-2">
                      <p className="text-base text-green-600 font-medium">All Systems Secure</p>
                      <p className="text-sm text-muted-foreground">
                        No security events or privilege escalations detected in the selected time period.
                      </p>
                      <div className="mt-4 p-3 bg-muted rounded-lg border">
                        <p className="text-xs text-muted-foreground">
                          ✓ No unauthorized access attempts<br/>
                          ✓ No suspicious activities detected<br/>
                          ✓ All authentication events normal
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

          </Accordion>
        )}
      </div>
    </section>
  )
}