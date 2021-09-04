import { css } from "@emotion/react"
import { Theme } from "../src/theme/theme"

const GlobalStyle = (theme: Theme) => css`
  body {
    background-color: ${theme.bgColor};
    transition: 0.3s ease-in-out;
  }
`

export default GlobalStyle
