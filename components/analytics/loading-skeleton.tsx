import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
}

export function MetricCardSkeleton() {
  return (
    <div className="p-6 bg-muted/5 rounded-lg border border-border">
      <div className="space-y-4">
        <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
        <div className="h-8 bg-muted rounded w-24 animate-pulse"></div>
        <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
      </div>
    </div>
  )
}

export function DataTableSkeleton() {
  return (
    <div className="bg-background border border-border rounded-lg shadow-sm">
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
          </div>
          <div className="p-3 rounded-xl bg-muted animate-pulse">
            <div className="w-6 h-6"></div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="py-3 space-y-2">
            <div className="h-5 bg-muted rounded w-full animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <main className={cn("min-h-screen bg-background", className)} aria-labelledby="dashboard-title">
      {/* Header Skeleton */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <div className="h-8 bg-muted rounded-lg w-64 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
            </div>
            <div className="flex gap-3">
              <div className="h-9 bg-muted rounded w-[180px] animate-pulse"></div>
              <div className="h-9 bg-muted rounded w-24 animate-pulse"></div>
              <div className="h-9 bg-muted rounded w-36 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 max-w-7xl space-y-6">
        {/* Priority Alert Bar Skeleton */}
        <div className="border border-destructive/20 bg-destructive/5 rounded-lg p-4">
          <div className="flex items-center gap-2 pb-3">
            <div className="h-5 w-5 bg-muted rounded animate-pulse"></div>
            <div className="h-5 bg-muted rounded w-24 animate-pulse"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-5 bg-muted rounded w-32 animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* OAuth Metrics Section */}
        <div className="border border-primary-300 dark:border-primary-600 rounded-lg">
          <div className="p-6 cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-600/10 rounded-lg">
                  <div className="h-5 w-5 bg-muted rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-48 mt-1 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 bg-muted rounded w-24 animate-pulse"></div>
                <div className="h-4 w-4 bg-muted rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-6 bg-muted/5 rounded-lg border border-border">
                  <div className="space-y-4">
                    <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
                    <div className="h-8 bg-muted rounded w-24 animate-pulse"></div>
                    <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Overview Section */}
        <div className="border border-destructive/20 dark:border-destructive/40 rounded-lg">
          <div className="p-6 cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <div className="h-5 w-5 bg-muted rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="h-6 bg-muted rounded w-36 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-52 mt-1 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 bg-muted rounded w-20 animate-pulse"></div>
                <div className="h-4 w-4 bg-muted rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="p-6 bg-muted/5 rounded-lg border border-border">
                  <div className="space-y-4">
                    <div className="h-6 bg-muted rounded w-36 animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-muted rounded animate-pulse"></div>
                      <div className="h-20 bg-muted rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance & Tools Section */}
        <div className="border border-secondary-300 dark:border-secondary-600 rounded-lg">
          <div className="p-6 cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary-600/10 rounded-lg">
                  <div className="h-5 w-5 bg-muted rounded animate-pulse"></div>
                </div>
                <div>
                  <div className="h-6 bg-muted rounded w-40 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-44 mt-1 animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 bg-muted rounded w-20 animate-pulse"></div>
                <div className="h-4 w-4 bg-muted rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="p-6 bg-muted/5 rounded-lg border border-border">
                  <div className="space-y-4">
                    <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
                    <div className="h-[200px] bg-muted rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Remove unused component exports since they're not used in the main page