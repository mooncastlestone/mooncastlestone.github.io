import Helmet from "react-helmet"
import React from "react"
import { ThemeProvider } from "./src/theme/ThemeContext"
import favicon from "./src/images/moon_off.png"

require("gatsby-remark-vscode/styles.css")

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {element}
    <Helmet>
      <link rel="icon" href={favicon} />
      <title>Home | Moon.log</title>
    </Helmet>
  </ThemeProvider>
)
