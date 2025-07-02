import React from "react"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gradientColor?: string
}

export function MagicCard({
  children,
  className = "",
  gradientColor = "#262626",
  ...props
}: MagicCardProps) {
  const baseClasses = "relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-shadow duration-300"
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <div
      className={combinedClasses}
      style={{
        "--gradient-color": gradientColor,
      } as React.CSSProperties}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default MagicCard 