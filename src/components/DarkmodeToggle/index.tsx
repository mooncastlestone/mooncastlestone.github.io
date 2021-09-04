import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import themeGroup, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { css } from "@emotion/react"

function DarkmodeToggle() {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <div css={Wrapper}>
      {themeMode === "light" ? (
        <StaticImage
          src="../../images/sun.png"
          width={25}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          placeholder="blurred"
          layout="fixed"
          className="image"
          onClick={onToggle}
        />
      ) : (
        <StaticImage
          src="../../images/moon.png"
          width={25}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          placeholder="blurred"
          layout="fixed"
          className="image"
          onClick={onToggle}
        />
      )}
    </div>
  )
}

export default DarkmodeToggle

const Wrapper = css`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

  .image {
    margin-right: 0.4rem;
    cursor: pointer;
  }

  
`
