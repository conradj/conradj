import * as d3 from "d3"

const height = 400,
  width = 600,
  marginTop = 50,
  marginBottom = 50,
  marginLeft = 50,
  marginRight = 50,
  data = [
    { year: 1980, calories: 100 },
    { year: 1981, calories: 110 },
    { year: 1982, calories: 120 },
    { year: 1983, calories: 123 },
    { year: 1984, calories: 129 },
    { year: 1985, calories: 116 },
    { year: 1986, calories: 134 },
    { year: 1987, calories: 159 },
    { year: 1988, calories: 172 },
    { year: 1989, calories: 207 },
    { year: 1990, calories: 220 },
  ]

const innerHeight = height - marginTop - marginBottom
const innerWidth = width - marginLeft - marginRight
const innerTransform = `translate(${marginLeft},${marginTop})`

const yearScale = d3
  .scaleLinear()
  .domain([data[0].year, data[data.length - 1].year])
  .range([0, innerWidth])

const calorieScale = d3
  .scaleLinear()
  .domain([data[0].calories, data[data.length - 1].calories])
  .range([innerHeight, 0])

export {
  height,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  data,
  yearScale,
  calorieScale,
}
