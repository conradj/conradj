import React from "react"
import * as d3 from "d3"
import { Axis, axisPropsFromTickScale, LEFT, BOTTOM } from "react-d3-axis"
import {
  height,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  data,
  yearScale,
  calorieScale,
} from "./chartValues"

const Chart2 = ({ showAxis, showLine }) => {
  const innerHeight = height - marginTop - marginBottom
  const innerWidth = width - marginLeft - marginRight
  const innerTransform = `translate(${marginLeft},${marginTop})`
  const linePath = d3
    .line()
    .x(d => yearScale(d.year))
    .y(d => calorieScale(d.calories))
  return (
    <svg height={height} width={width}>
      <g transform={innerTransform}>
        <rect width={innerWidth} height={innerHeight} fill="white"></rect>
        {showAxis && (
          <>
            <Axis
              {...axisPropsFromTickScale(calorieScale, 10)}
              style={{ orient: LEFT }}
            />
            <g transform={`translate(0, ${innerHeight})`}>
              <Axis {...axisPropsFromTickScale(yearScale, 10)} />
            </g>
            {showLine && (
              <path
                d={linePath(data)}
                style={{
                  fill: "none",
                  stroke: "rgb(17, 101, 228)",
                  strokeWidth: 2,
                  transition: "d 150ms",
                }}
              />
            )}
          </>
        )}
      </g>
    </svg>
  )
}

export default Chart2
