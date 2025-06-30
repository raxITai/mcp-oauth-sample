import type React from "react"
import { Clock, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface DashboardHeaderProps {
  title: string
  subtitle?: string
  lastUpdated?: string
  timeRange?: string
  status?: "healthy" | "warning" | "critical" | "unknown"
  children?: React.ReactNode
  className?: string
}

function getStatusColor(status: string) {
  switch (status) {
    case "healthy":
      return "bg-green-500"
    case "warning":
      return "bg-yellow-500"
    case "critical":
      return "bg-destructive"
    default:
      return "bg-base-400"
  }
}

function getStatusBadge(status: string) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
  
  switch (status) {
    case "healthy":
      return cn(baseClasses, "bg-green-500 text-white")
    case "warning":
      return cn(baseClasses, "bg-yellow-500 text-white")
    case "critical":
      return cn(baseClasses, "bg-destructive text-white")
    default:
      return cn(baseClasses, "bg-base-400 text-white")
  }
}

export function DashboardHeader({
  title,
  subtitle,
  lastUpdated,
  timeRange,
  status = "unknown",
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
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-4">
            {/* Title - Design System: fontSize.3xl, fontWeight.bold, color.foreground */}
            <h1 className="text-3xl font-bold text-foreground" id="dashboard-main-title">
              {title}
            </h1>
            
            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg text-muted-foreground" aria-describedby="dashboard-main-title">
                {subtitle}
              </p>
            )}
            
            {/* Status and Meta Information */}
            <div 
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
              role="group"
              aria-label="Dashboard status and metadata"
            >
              {/* Last Updated */}
              {lastUpdated && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span aria-label={`Last updated ${new Date(lastUpdated).toLocaleString()}`}>
                    Last updated: {new Date(lastUpdated).toLocaleString()}
                  </span>
                </div>
              )}
              
              {/* Time Range */}
              {timeRange && (
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4" aria-hidden="true" />
                  <span aria-label={`Time range ${timeRange}`}>
                    Time Range: {timeRange}
                  </span>
                </div>
              )}
              
              {/* Status Indicator */}
              <div className="flex items-center gap-2">
                <div 
                  className={cn("w-3 h-3 rounded-full", getStatusColor(status))}
                  aria-label={`System status: ${status}`}
                />
                <span className="capitalize" aria-hidden="true">{status}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          {children && (
            <div 
              className="flex flex-wrap items-center gap-3"
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