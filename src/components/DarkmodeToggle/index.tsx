import React, { useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import themeGroup from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { css } from "@emotion/react"

function DarkmodeToggle() {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <div css={Wrapper}>
      {themeMode === "light" ? (
        <button type="button" onClick={onToggle}>
          <StaticImage
            src="../../images/sun.png"
            width={25}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="darkmode on button"
            placeholder="blurred"
            layout="fixed"
          />
        </button>
      ) : (
        <button type="button" onClick={onToggle}>
          <StaticImage
            src="../../images/moon.png"
            width={25}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="darkmode off button"
            placeholder="blurred"
            layout="fixed"
          />
        </button>
      )}
    </div>
  )
}

export default DarkmodeToggle

const Wrapper = css`
  button {
    border: none;
    background: none;
  }

  img {
    margin-right: 0.4rem;
    cursor: pointer;
  }
`
