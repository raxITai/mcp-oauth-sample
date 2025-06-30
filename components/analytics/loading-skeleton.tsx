import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
}

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div className={cn("min-h-screen bg-muted/30", className)}>
      {/* Header Skeleton */}
      <div className="bg-background border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              {/* Title Skeleton - Design System: height 2rem, width 16rem */}
              <div className="h-8 bg-muted rounded-lg w-64 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-48 animate-pulse"></div>
            </div>
            <div className="flex gap-3">
              <div className="h-9 bg-muted rounded w-32 animate-pulse"></div>
              <div className="h-9 bg-muted rounded w-24 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Metrics Skeleton - Design System: patterns.cardGrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-background border border-border rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-24 animate-pulse"></div>
                  <div className="h-8 bg-muted rounded w-16 animate-pulse"></div>
                  <div className="h-3 bg-muted rounded w-20 animate-pulse"></div>
                </div>
                <div className="h-12 w-12 bg-muted rounded-xl animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid Skeleton - Design System: patterns.contentGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 bg-muted rounded-lg animate-pulse"></div>
                <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
              </div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-8 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
                    </div>
                    <div className="h-4 bg-muted rounded w-12 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 bg-muted rounded-lg animate-pulse"></div>
                <div className="h-6 bg-muted rounded w-40 animate-pulse"></div>
              </div>
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded w-28 animate-pulse"></div>
                        <div className="h-3 bg-muted rounded w-36 animate-pulse"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded w-20 animate-pulse"></div>
                        <div className="h-3 bg-muted rounded w-16 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 bg-muted rounded-lg animate-pulse"></div>
                <div className="h-6 bg-muted rounded w-36 animate-pulse"></div>
              </div>
              
              {/* Security Overview Skeleton */}
              <div className="p-6 bg-muted/50 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
                    <div className="h-8 bg-muted rounded w-16 animate-pulse"></div>
                  </div>
                  <div className="h-10 w-10 bg-muted rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Security Events Skeleton */}
              <div className="space-y-4">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="p-4 bg-muted/50 rounded-lg border">
                    <div className="flex justify-between items-start mb-3">
                      <div className="h-4 bg-muted rounded w-24 animate-pulse"></div>
                      <div className="h-5 bg-muted rounded w-16 animate-pulse"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-muted rounded w-28 animate-pulse"></div>
                      <div className="space-y-1">
                        <div className="h-3 bg-muted rounded w-16 animate-pulse"></div>
                        <div className="h-3 bg-muted rounded w-12 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Skeleton for individual components
export function MetricCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("bg-background border border-border rounded-lg p-6 shadow-sm", className)}>
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded w-24 animate-pulse"></div>
          <div className="h-8 bg-muted rounded w-16 animate-pulse"></div>
          <div className="h-3 bg-muted rounded w-20 animate-pulse"></div>
        </div>
        <div className="h-12 w-12 bg-muted rounded-xl animate-pulse"></div>
      </div>
    </div>
  )
}

export function DataTableSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("bg-background border border-border rounded-lg shadow-sm p-6", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-8 bg-muted rounded-lg animate-pulse"></div>
        <div className="h-6 bg-muted rounded w-32 animate-pulse"></div>
      </div>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-6 w-8 bg-muted rounded animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
            </div>
            <div className="h-4 bg-muted rounded w-12 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}