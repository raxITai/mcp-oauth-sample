import type React from "react"
import { cn } from "@/lib/utils"

interface DataTableItem {
  primary: string
  secondary?: string
  value: string | number
  badge?: string
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"
}

interface DataTableProps {
  title: string
  icon: React.ComponentType<{ className?: string }>
  data: DataTableItem[]
  emptyMessage?: string
  className?: string
  maxItems?: number
}

export function DataTable({ 
  title, 
  icon: Icon, 
  data, 
  emptyMessage = "No data available",
  className,
  maxItems = 5
}: DataTableProps) {
  const displayData = data.slice(0, maxItems)

  return (
    <section 
      className={cn("bg-background border border-border rounded-lg shadow-sm", className)}
      aria-labelledby={`table-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* Header - Design System: spacing.6, typography.lg */}
      <div className="p-6 pb-4">
        <h3 
          className="flex items-center gap-3 text-lg font-semibold text-foreground"
          id={`table-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <div className="p-2 bg-muted rounded-lg" aria-hidden="true">
            <Icon className="w-5 h-5 text-muted-foreground" />
          </div>
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {displayData.length === 0 ? (
          // Empty State - Design System: spacing.8, color.muted-foreground
          <div className="text-center py-8 text-muted-foreground" role="status" aria-live="polite">
            <Icon className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-50" aria-hidden="true" />
            <p>{emptyMessage}</p>
          </div>
        ) : (
          // Data Items - Design System: spacing.3, color.muted, borderRadius.lg
          <div 
            className="space-y-3" 
            role="list" 
            aria-label={`${title} data with ${displayData.length} items`}
          >
            {displayData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                role="listitem"
                tabIndex={0}
                aria-label={`Rank ${index + 1}: ${item.primary}${item.secondary ? `, ${item.secondary}` : ''}, value: ${item.value}${item.badge ? `, ${item.badge}` : ''}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    {/* Rank - Design System: fontSize.xs, spacing.2 */}
                    <span 
                      className="text-xs font-medium text-muted-foreground bg-background px-2 py-1 rounded border"
                      aria-label={`Rank ${index + 1}`}
                    >
                      #{index + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      {/* Primary Text - Design System: fontWeight.medium, color.foreground */}
                      <p className="font-medium text-foreground truncate" title={item.primary}>
                        {item.primary}
                      </p>

                      {/* Secondary Text - Design System: fontSize.sm, color.muted-foreground, fontFamily.mono */}
                      {item.secondary && (
                        <p 
                          className="text-sm text-muted-foreground truncate font-mono" 
                          title={item.secondary}
                          aria-label={`Secondary info: ${item.secondary}`}
                        >
                          {item.secondary}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 ml-4">
                  {/* Badge - Design System: fontSize.xs */}
                  {item.badge && (
                    <span 
                      className="text-xs bg-muted border text-muted-foreground px-2 py-1 rounded"
                      aria-label={`Badge: ${item.badge}`}
                    >
                      {item.badge}
                    </span>
                  )}

                  {/* Value - Design System: fontWeight.semibold, color.foreground */}
                  <span className="font-semibold text-foreground" aria-label={`Value: ${item.value}`}>
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}