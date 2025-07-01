"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface GeographicData {
  country: string
  city?: string | null
  count: number
  percentage: number
  // You'd need to add coordinates for mapping
  latitude?: number
  longitude?: number
}

interface GeographicMapProps {
  data: GeographicData[]
  title?: string
  description?: string
  className?: string
}

export function GeographicMap({ 
  data, 
  title = "Tool Usage by Location",
  description = "Geographic distribution of MCP tool calls",
  className 
}: GeographicMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!data.length || !svgRef.current) return

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove()

    // Map dimensions
    const width = 800
    const height = 500
    const margin = { top: 20, right: 20, bottom: 20, left: 20 }

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", "100%")
      .attr("height", "100%")
      .style("max-width", "100%")
      .style("height", "auto")

    // For now, create a simple world map placeholder with bubbles
    // In a real implementation, you'd load world map data (TopoJSON/GeoJSON)
    
    // Mock coordinates for common countries (you'd get these from a geocoding service)
    const countryCoords: Record<string, [number, number]> = {
      "United States": [-95.7129, 37.0902],
      "Canada": [-106.3468, 56.1304],
      "United Kingdom": [-2.0000, 53.0000],
      "Germany": [10.0000, 51.0000],
      "France": [2.0000, 46.0000],
      "Japan": [138.0000, 36.0000],
      "Australia": [133.0000, -25.0000],
      "Brazil": [-55.0000, -10.0000],
      "India": [77.0000, 20.0000],
      "China": [104.0000, 35.0000]
    }

    // Simple map projection (you'd use a proper projection in real implementation)
    const xScale = d3.scaleLinear()
      .domain([-180, 180])
      .range([margin.left, width - margin.right])

    const yScale = d3.scaleLinear()
      .domain([90, -90])
      .range([margin.top, height - margin.bottom])

    // Color and size scales
    const maxCount = d3.max(data, d => d.count) || 1
    const radiusScale = d3.scaleSqrt()
      .domain([0, maxCount])
      .range([5, 30])

    const colorScale = d3.scaleSequential()
      .domain([0, maxCount])
      .interpolator(d3.interpolateBlues)

    // Add background
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "var(--muted)")
      .attr("stroke", "var(--border)")

    // Add grid lines
    const xAxis = d3.axisBottom(xScale).tickSize(-height + margin.top + margin.bottom)
    const yAxis = d3.axisLeft(yScale).tickSize(-width + margin.left + margin.right)

    svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll("text").remove() // Hide tick labels
      .selectAll(".grid line")
      .attr("stroke", "var(--border)")
      .attr("stroke-opacity", 0.3)

    svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(${margin.left},0)`)
      .call(yAxis)
      .selectAll("text").remove() // Hide tick labels
      .selectAll(".grid line")
      .attr("stroke", "var(--border)")
      .attr("stroke-opacity", 0.3)

    // Add circles for each country with data
    const circles = svg.selectAll("circle")
      .data(data.filter(d => countryCoords[d.country]))
      .enter()
      .append("circle")
      .attr("cx", d => {
        const coords = countryCoords[d.country]
        return coords ? xScale(coords[0]) : 0
      })
      .attr("cy", d => {
        const coords = countryCoords[d.country]
        return coords ? yScale(coords[1]) : 0
      })
      .attr("r", 0) // Start with 0 radius for animation
      .attr("fill", d => colorScale(d.count))
      .attr("stroke", "var(--primary)")
      .attr("stroke-width", 2)
      .attr("opacity", 0.8)
      .style("cursor", "pointer")

    // Animate circles
    circles.transition()
      .duration(1000)
      .delay((d, i) => i * 100)
      .attr("r", d => radiusScale(d.count))

    // Add tooltips
    const tooltip = d3.select("body").append("div")
      .attr("class", "d3-tooltip")
      .style("position", "absolute")
      .style("background", "var(--background)")
      .style("border", "1px solid var(--border)")
      .style("border-radius", "6px")
      .style("padding", "8px")
      .style("font-size", "12px")
      .style("box-shadow", "0 4px 6px rgba(0, 0, 0, 0.1)")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("z-index", 1000)

    circles
      .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 1)
        tooltip.html(`
          <strong>${d.country}</strong><br/>
          ${d.city ? `${d.city}<br/>` : ''}
          <strong>${d.count}</strong> tool calls<br/>
          <strong>${d.percentage}%</strong> of total usage
        `)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px")
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 10) + "px")
      })
      .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0)
      })

    // Add labels for countries
    svg.selectAll("text.country-label")
      .data(data.filter(d => countryCoords[d.country]))
      .enter()
      .append("text")
      .attr("class", "country-label")
      .attr("x", d => {
        const coords = countryCoords[d.country]
        return coords ? xScale(coords[0]) : 0
      })
      .attr("y", d => {
        const coords = countryCoords[d.country]
        return coords ? yScale(coords[1]) + radiusScale(d.count) + 15 : 0
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "var(--foreground)")
      .attr("font-weight", "500")
      .text(d => d.country)

    // Cleanup function
    return () => {
      d3.select("body").selectAll(".d3-tooltip").remove()
    }

  }, [data])

  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader className="items-center pb-4">
        <CardTitle>{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <div className="w-full overflow-hidden rounded-lg border">
          <svg
            ref={svgRef}
            className="w-full h-auto"
            style={{ minHeight: "400px" }}
          />
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <span>Low usage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span>Medium usage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-800"></div>
            <span>High usage</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}