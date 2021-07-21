import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import THEME, { Theme } from "../../styles/theme"

const Preparing = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <div>
      <StaticImage
        src="../images/preparing.png"
        width={500}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        placeholder="blurred"
        css={Image}
      />
      <div css={TextBox}>
        <span css={Text(theme)} style={{ fontWeight: "bold" }}>
          컨텐츠 준비중
        </span>
        <span css={Text(theme)}>입니다.</span>
      </div>
    </div>
  )
}

export default Preparing

const Image = css``

const TextBox = css`
  text-align: center;
  margin-top: -1.3rem;
  width: 105%;
`

const Text = (theme: Theme) => css`
  font-size: 1.5rem;
  color: ${theme.fontColor};
`
