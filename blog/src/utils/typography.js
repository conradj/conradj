import Typography from "typography"
import sternGroveTheme from "typography-theme-stern-grove"
sternGroveTheme.headerFontFamily = ["Merriweather", "serif"]
sternGroveTheme.headerColor = "hsl(0,0,0,0.8)"
sternGroveTheme.bodyFontFamily = ["Kadwa", "serif"]

sternGroveTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
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
