import type React from "react"
import { CheckCircle, AlertTriangle, Shield, ShieldCheck, ShieldX } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
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

  const getSeverityBadgeVariant = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
      case 'high':
        return 'destructive'
      case 'medium':
        return 'secondary'
      case 'low':
        return 'default'
      default:
        return 'outline'
    }
  }

  return (
    <div className="bg-background border border-border rounded-lg shadow-sm h-full flex flex-col">
      <div className="p-4 space-y-4 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className={cn(
              "p-1.5 rounded-full shrink-0",
              hasSecurityIssues ? "bg-destructive/10" : "bg-primary-100"
            )}>
              {hasSecurityIssues ? (
                <Shield className="w-4 h-4 text-destructive" />
              ) : (
                <ShieldCheck className="w-4 h-4 text-primary-600" />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-foreground truncate">OAuth Security</h3>
              <p className="text-xs text-muted-foreground truncate">
                {hasSecurityIssues 
                  ? `${totalEvents} security events detected`
                  : "All OAuth flows secure"
                }
              </p>
            </div>
          </div>
          
          {/* Status Badge */}
          <Badge variant={hasSecurityIssues ? "destructive" : "default"} className="gap-1.5 whitespace-nowrap">
            {hasSecurityIssues ? (
              <>
                <AlertTriangle className="w-3 h-3" />
                Issues
              </>
            ) : (
              <>
                <CheckCircle className="w-3 h-3" />
                Secure
              </>
            )}
          </Badge>
        </div>

        {/* Quick Stats */}
        {hasSecurityIssues && (
          <div className="grid grid-cols-3 gap-2 p-3 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-base font-semibold text-foreground">{invalidClientAttempts}</div>
              <div className="text-xs text-muted-foreground">Invalid Clients</div>
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-foreground">{invalidGrantAttempts}</div>
              <div className="text-xs text-muted-foreground">Invalid Grants</div>
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-foreground">{unauthorizedScopes}</div>
              <div className="text-xs text-muted-foreground">Scope Issues</div>
            </div>
          </div>
        )}

        {/* Events Details */}
        {oauthEvents.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="oauth-events" className="border-border">
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Events ({oauthEvents.length})
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {oauthEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 bg-muted/30 rounded-lg">
                      {getEventIcon(event.eventType)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-medium text-xs text-foreground truncate">
                            {event.clientName}
                          </span>
                          <Badge variant={getSeverityBadgeVariant(event.severity)} className="text-xs">
                            {event.severity}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {event.eventType.replace('OAUTH_', '').replace('_', ' ').toLowerCase()}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
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
          <div className="text-center py-4">
            <ShieldCheck className="w-10 h-10 text-primary-600 mx-auto mb-2" />
            <h4 className="font-medium text-sm text-foreground">OAuth Security All Clear</h4>
            <p className="text-xs text-muted-foreground">
              No security events detected
            </p>
          </div>
        )}
      </div>
    </div>
  )
}