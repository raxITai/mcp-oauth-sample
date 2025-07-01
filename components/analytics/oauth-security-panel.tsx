import type React from "react"
import { CheckCircle, AlertTriangle, Shield, ShieldCheck, ShieldX } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface OAuthSecurityEvent {
  clientName: string
  clientId: string
  eventType: string
  severity: string
  count: number
  lastOccurred: string
}

interface OAuthSecurityPanelProps {
  totalEvents: number
  oauthEvents?: OAuthSecurityEvent[]
  invalidClientAttempts?: number
  invalidGrantAttempts?: number
  unauthorizedScopes?: number
}

export function OAuthSecurityPanel({
  totalEvents,
  oauthEvents = [],
  invalidClientAttempts = 0,
  invalidGrantAttempts = 0,
  unauthorizedScopes = 0
}: OAuthSecurityPanelProps) {
  const hasSecurityIssues = totalEvents > 0 || invalidClientAttempts > 0 || invalidGrantAttempts > 0 || unauthorizedScopes > 0
  
  const getEventIcon = (eventType: string) => {
    switch (eventType.toLowerCase()) {
      case 'oauth_invalid_client':
        return <ShieldX className="w-4 h-4 text-destructive" />
      case 'oauth_invalid_grant':
        return <AlertTriangle className="w-4 h-4 text-secondary-600" />
      case 'oauth_invalid_scope':
        return <Shield className="w-4 h-4 text-primary-600" />
      default:
        return <AlertTriangle className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'text-destructive bg-destructive/10'
      case 'high':
        return 'text-destructive bg-destructive/10'
      case 'medium':
        return 'text-secondary-600 bg-secondary-300/20'
      case 'low':
        return 'text-primary-600 bg-primary-100/50'
      default:
        return 'text-muted-foreground bg-muted'
    }
  }

  return (
    <div className="bg-background border border-border rounded-lg shadow-sm">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-full",
              hasSecurityIssues ? "bg-destructive/10" : "bg-primary-100"
            )}>
              {hasSecurityIssues ? (
                <Shield className="w-5 h-5 text-destructive" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-primary-600" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">OAuth Security</h3>
              <p className="text-sm text-muted-foreground">
                {hasSecurityIssues 
                  ? `${totalEvents} security events detected`
                  : "All OAuth flows secure"
                }
              </p>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className={cn(
            "px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2",
            hasSecurityIssues 
              ? "bg-destructive/10 text-destructive" 
              : "bg-primary-100 text-primary-600"
          )}>
            {hasSecurityIssues ? (
              <>
                <AlertTriangle className="w-3 h-3" />
                Issues Detected
              </>
            ) : (
              <>
                <CheckCircle className="w-3 h-3" />
                Secure
              </>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        {hasSecurityIssues && (
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{invalidClientAttempts}</div>
              <div className="text-xs text-muted-foreground">Invalid Clients</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{invalidGrantAttempts}</div>
              <div className="text-xs text-muted-foreground">Invalid Grants</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">{unauthorizedScopes}</div>
              <div className="text-xs text-muted-foreground">Scope Issues</div>
            </div>
          </div>
        )}

        {/* Events Details */}
        {oauthEvents.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="oauth-events" className="border-border">
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  OAuth Security Events ({oauthEvents.length})
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-3">
                  {oauthEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      {getEventIcon(event.eventType)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-foreground truncate">
                            {event.clientName}
                          </span>
                          <span className={cn(
                            "px-2 py-0.5 rounded text-xs font-medium",
                            getSeverityColor(event.severity)
                          )}>
                            {event.severity}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {event.eventType.replace('OAUTH_', '').replace('_', ' ').toLowerCase()}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {event.count} occurrences • Last: {event.lastOccurred}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        {/* All Clear State */}
        {!hasSecurityIssues && (
          <div className="text-center py-6">
            <ShieldCheck className="w-12 h-12 text-primary-600 mx-auto mb-3" />
            <h4 className="font-medium text-foreground mb-1">OAuth Security All Clear</h4>
            <p className="text-sm text-muted-foreground">
              No security events detected in your OAuth flows
            </p>
          </div>
        )}
      </div>
    </div>
  )
}