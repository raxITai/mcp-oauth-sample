"use client"

import type React from "react"
import { Pie, PieChart, Cell } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
} from "@/components/ui/chart"

interface PieChartData {
  name: string
  value: number
  percentage?: number
  fill?: string
}

interface AnalyticsPieChartProps {
  title: string
  description?: string
  data: PieChartData[]
  dataKey?: string
  nameKey?: string
  className?: string
  config?: ChartConfig
  icon?: React.ComponentType<{ className?: string }>
}

// Default color palette using your globals.css colors
const defaultColors = [
  "var(--primary-600)",     // Main primary color
  "var(--secondary-600)",   // Secondary color  
  "var(--primary-300)",     // Lighter primary
  "var(--secondary-300)",   // Lighter secondary
  "var(--primary-800)",     // Darker primary
  "var(--secondary-800)",   // Darker secondary
  "var(--base-600)",        // Neutral
  "var(--base-400)"         // Light neutral
]

export function AnalyticsPieChart({
  title,
  description,
  data,
  dataKey = "value",
  nameKey = "name",
  className,
  config,
  icon: Icon
}: AnalyticsPieChartProps) {
  
  // Add colors to data if not provided
  const chartData = data.map((item, index) => ({
    ...item,
    fill: item.fill || defaultColors[index % defaultColors.length]
  }))

  // Generate config if not provided
  const chartConfig = config || chartData.reduce((acc, item, index) => {
    const key = item.name.toLowerCase().replace(/[^a-z0-9]/g, '')
    acc[key] = {
      label: item.name,
      color: item.fill || defaultColors[index % defaultColors.length]
    }
    return acc
  }, {} as ChartConfig)

  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader className="pb-0">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
            {description && (
              <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
            )}
          </div>
          {/* Icon Container - Design System: spacing.3, borderRadius.xl, semantic colors */}
          {Icon && (
            <div className="p-3 rounded-xl bg-secondary-300 text-secondary-600" aria-hidden="true">
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie 
              data={chartData} 
              dataKey={dataKey}
              nameKey={nameKey}
              cx="50%" 
              cy="50%" 
              outerRadius={80}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}