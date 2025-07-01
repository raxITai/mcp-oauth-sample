"use client"

import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface TimeSeriesData {
  hour: string
  toolName: string
  avgResponseTime: number
  callCount: number
  p95ResponseTime: number
  p50ResponseTime: number
}

interface ToolResponseAreaChartProps {
  data: TimeSeriesData[]
  title?: string
  description?: string
  className?: string
  hoursBack?: number
}

// Color mapping for different tools using globals.css colors
const getToolColor = (toolName: string, index: number) => {
  const colors = [
    "var(--primary-600)",     // Main primary
    "var(--secondary-600)",   // Secondary  
    "var(--primary-300)",     // Lighter primary
    "var(--secondary-300)",   // Lighter secondary
    "var(--primary-800)",     // Darker primary
    "var(--secondary-800)",   // Darker secondary
    "var(--base-600)",        // Neutral
    "var(--base-400)"         // Light neutral
  ]
  return colors[index % colors.length]
}

export function ToolResponseAreaChart({ 
  data, 
  title = "Tool Response Times",
  description = "Average response times over the last 24 hours",
  className,
  hoursBack = 24
}: ToolResponseAreaChartProps) {
  
  // Transform data for stacked area chart
  // Group by hour and create tools as columns
  const hoursMap = new Map<string, any>()
  const toolNames = new Set<string>()
  
  // Process data to extract unique tools and hours
  data.forEach(item => {
    toolNames.add(item.toolName)
    const hourKey = new Date(item.hour).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
    
    if (!hoursMap.has(hourKey)) {
      hoursMap.set(hourKey, { hour: hourKey })
    }
    
    const hourData = hoursMap.get(hourKey)
    if (hourData) {
      hourData[item.toolName] = item.avgResponseTime
    }
  })
  
  // Convert to array and fill missing values with 0
  const chartData = Array.from(hoursMap.values()).map(hourData => {
    const result = { ...hourData }
    toolNames.forEach(toolName => {
      if (!(toolName in result)) {
        result[toolName] = 0
      }
    })
    return result
  }).sort((a, b) => a.hour.localeCompare(b.hour))
  
  // Generate chart config for all tools
  const chartConfig: ChartConfig = {}
  Array.from(toolNames).forEach((toolName, index) => {
    const color = getToolColor(toolName, index)
    chartConfig[toolName] = {
      label: formatToolName(toolName),
      color: color
    }
  })
  
  // Calculate performance trend
  const recentData = chartData.slice(-6) // Last 6 hours
  const earlierData = chartData.slice(0, 6) // First 6 hours
  
  const recentAvg = recentData.length > 0 
    ? recentData.reduce((sum, item) => {
        const toolValues = Array.from(toolNames).map(tool => item[tool] || 0)
        return sum + toolValues.reduce((a, b) => a + b, 0) / toolValues.length
      }, 0) / recentData.length
    : 0
    
  const earlierAvg = earlierData.length > 0
    ? earlierData.reduce((sum, item) => {
        const toolValues = Array.from(toolNames).map(tool => item[tool] || 0)
        return sum + toolValues.reduce((a, b) => a + b, 0) / toolValues.length
      }, 0) / earlierData.length
    : 0
  
  const trendPercentage = earlierAvg > 0 
    ? Math.round(((recentAvg - earlierAvg) / earlierAvg) * 100)
    : 0
    
  const getTrendIcon = () => {
    if (trendPercentage > 5) return <TrendingUp className="h-4 w-4 text-destructive" />
    if (trendPercentage < -5) return <TrendingDown className="h-4 w-4 text-green-500" />
    return <Minus className="h-4 w-4 text-muted-foreground" />
  }
  
  const getTrendText = () => {
    if (trendPercentage > 5) return `Response times up ${trendPercentage}%`
    if (trendPercentage < -5) return `Response times down ${Math.abs(trendPercentage)}%`
    return "Response times stable"
  }

  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval="preserveStartEnd"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fontSize: 12 }}
              label={{ value: 'Response Time (ms)', angle: -90, position: 'insideLeft' }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                indicator="dot" 
                labelFormatter={(value) => `Time: ${value}`}
                formatter={(value, name) => [
                  `${Math.round(Number(value))}ms`,
                  chartConfig[name as string]?.label || name
                ]}
              />}
            />
            {Array.from(toolNames).map((toolName, index) => (
              <Area
                key={toolName}
                dataKey={toolName}
                type="monotone"
                fill={getToolColor(toolName, index)}
                fillOpacity={0.4}
                stroke={getToolColor(toolName, index)}
                strokeWidth={2}
                stackId="a"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              {getTrendText()} {getTrendIcon()}
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Based on last {hoursBack} hours • {toolNames.size} tools tracked
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

// Helper function to format tool names for display
function formatToolName(toolName: string): string {
  return toolName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}