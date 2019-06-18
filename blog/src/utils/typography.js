import Typography from "typography"
import sternGroveTheme from "typography-theme-stern-grove"
sternGroveTheme.headerFontFamily = ["Merriweather", "serif"]
sternGroveTheme.headerColor = "hsla(0,0%,0%,0.7)"
sternGroveTheme.bodyFontFamily = ["Kadwa", "serif"]
sternGroveTheme.bodyColor = "hsla(0,0%,0%,0.8)"

sternGroveTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  h1: {
    color: "hsla(0,0%,0%,0.8)",
    fontSize: "1.8rem",
  },
  "h2 small": {
    color: "hsla(0,0%,0%,0.5)",
    fontSize: "0.7rem",
  },
  a: {
    color: "#d81159",
  },
  "a:hover, a:active": {
    color: "#d81159",
    transition: "all .25s ease-in-out",
    borderBottom: "3px solid #d81159",
  },
})

const typography = new Typography(sternGroveTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
