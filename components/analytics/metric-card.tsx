import type React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface MetricCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: React.ComponentType<{ className?: string }>
  variant?: "primary" | "secondary"
  subtitle?: string
  className?: string
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  variant = "primary",
  subtitle,
  className,
}: MetricCardProps) {
  // Color mapping from design system - only primary and secondary
  const colorClasses = {
    primary: "bg-primary-100 text-primary-600",
    secondary: "bg-secondary-300 text-secondary-600",
  }

  const changeBadgeVariant = {
    positive: "secondary" as const,
    negative: "destructive" as const,
    neutral: "outline" as const,
  }

  return (
    <article 
      className={cn(
        "bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        className
      )}
      role="img"
      aria-label={`${title}: ${value}${change ? `, ${change}` : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          {/* Title - Design System: fontSize.sm, fontWeight.medium, color.muted-foreground */}
          <p className="text-sm font-medium text-muted-foreground" id={`metric-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            {title}
          </p>

          <div className="space-y-1">
            {/* Value - Design System: fontSize.3xl, fontWeight.bold, color.foreground */}
            <p 
              className="text-3xl font-bold text-foreground" 
              aria-labelledby={`metric-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {value}
            </p>

            {/* Subtitle - Design System: fontSize.xs, color.muted-foreground */}
            {subtitle && (
              <p className="text-xs text-muted-foreground opacity-75" aria-label={`Additional info: ${subtitle}`}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Change Indicator - Using Badge component */}
          {change && (
            <Badge
              variant={changeBadgeVariant[changeType]}
              className="text-xs font-medium"
              aria-label={`Change indicator: ${change}, ${changeType} trend`}
            >
              {change}
            </Badge>
          )}
        </div>

        {/* Icon Container - Design System: spacing.3, borderRadius.xl, semantic colors */}
        <div 
          className={cn("p-3 rounded-xl", colorClasses[variant])}
          aria-hidden="true"
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </article>
  )
}