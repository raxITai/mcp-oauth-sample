import type React from "react"
import { Clock, Activity, Server } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface DashboardHeaderProps {
  title: string
  subtitle?: string
  lastUpdated?: string
  timeRange?: string
  status?: "healthy" | "warning" | "critical" | "unknown"
  serverName?: string
  serverUrl?: string
  children?: React.ReactNode
  className?: string
}


function getStatusBadge(status: string) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
  
  switch (status) {
    case "healthy":
      return cn(baseClasses, "bg-primary-600 text-primary-foreground")
    case "warning":
      return cn(baseClasses, "bg-secondary-600 text-secondary-foreground")
    case "critical":
      return cn(baseClasses, "bg-destructive text-primary-foreground")
    default:
      return cn(baseClasses, "bg-base-400 text-primary-foreground")
  }
}

export function DashboardHeader({
  title,
  subtitle,
  lastUpdated,
  timeRange,
  serverName,
  serverUrl,
  children,
  className
}: DashboardHeaderProps) {
  return (
    <header 
      className={cn(
        "bg-background border-b border-border sticky top-0 z-10",
        className
      )}
      role="banner"
    >
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-2">
            {/* Title - Design System: fontSize.2xl, fontWeight.bold, color.foreground */}
            <h1 className="text-2xl font-bold text-foreground" id="dashboard-main-title">
              {title}
            </h1>
            
            {/* Subtitle */}
            {subtitle && (
              <p className="text-base text-muted-foreground" aria-describedby="dashboard-main-title">
                {subtitle}
              </p>
            )}
            

            
            {/* Status and Meta Information */}
            <div 
              className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
              role="group"
              aria-label="Dashboard status and metadata"
            >
              {/* Last Updated */}
              {lastUpdated && (
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  <span aria-label={`Last updated ${new Date(lastUpdated).toLocaleString()}`}>
                    Last updated: {new Date(lastUpdated).toLocaleString()}
                  </span>
                </div>
              )}
              
              {/* Time Range */}
              {timeRange && (
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3" aria-hidden="true" />
                  <span aria-label={`Time range ${timeRange}`}>
                    Time Range: {timeRange}
                  </span>
                </div>
              )}
              
              {/* MCP Server Info */}
              {serverName && (
                <div className="flex items-center gap-2">
                  <Server className="w-3 h-3" aria-hidden="true" />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span 
                          className="cursor-default"
                          aria-label={`MCP Server: ${serverName}${serverUrl ? ` (${serverUrl})` : ''}`}
                        >
                          {serverName}
                        </span>
                      </TooltipTrigger>
                      {serverUrl && (
                        <TooltipContent side="bottom" className="font-mono">
                          {serverUrl}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
              
              {/* Status Indicator */}
              {/* <div className="flex items-center gap-2">
                <div 
                  className={cn("w-3 h-3 rounded-full", getStatusColor(status))}
                  aria-label={`System status: ${status}`}
                />
                <span className="capitalize" aria-hidden="true">{status}</span>
              </div> */}
            </div>
          </div>

          {/* Controls */}
          {children && (
            <div 
              className="flex flex-wrap items-center gap-2"
              role="group"
              aria-label="Dashboard controls"
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

// Status Badge Component
interface StatusBadgeProps {
  status: "healthy" | "warning" | "critical" | "unknown"
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn(getStatusBadge(status), className)}>
      {status}
    </span>
  )
}