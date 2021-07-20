import "@fontsource/open-sans"
import "@fontsource/athiti"

import React from "react"
import { ThemeProvider } from "./src/components/ThemeContext"
require("prismjs/themes/prism-tomorrow.css")



export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
