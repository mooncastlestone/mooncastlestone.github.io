import React, { useContext, useEffect, useState } from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import themeGroup, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import {
  Category,
  Container,
  Home,
  Image,
  LeftBox,
  RightBox,
} from "./Nav.style"

type NavProps = {
  isClosed: Boolean
}

const Nav = ({ isClosed }: NavProps) => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <div css={Container({ theme, isClosed })}>
      <div css={LeftBox}>
        {themeMode === "light" ? (
          <StaticImage
            src="../../images/moon_off.png"
            width={30}
            quality={100}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            layout="fixed"
            css={Image}
          />
        ) : (
          <StaticImage
            src="../../images/moon_on.png"
            width={30}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            placeholder="blurred"
            layout="fixed"
            css={Image}
          />
        )}
        <Link css={Home(theme)} to="/">
          Moon.log
        </Link>
      </div>
      <div css={RightBox}>
        <Link css={Category(theme)} to="/">
          Blog
        </Link>
        <Link css={Category(theme)} to="/portfolio">
          Portfolio
        </Link>
        <Link css={Category(theme)} to="/about">
          About
        </Link>
        {themeMode === "light" ? (
          <StaticImage
            src="../../images/sun.png"
            width={25}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            placeholder="blurred"
            layout="fixed"
            css={Image}
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
            css={Image}
            onClick={onToggle}
          />
        )}
      </div>
    </div>
  )
}

export default Nav
