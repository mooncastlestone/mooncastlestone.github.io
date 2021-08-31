import React, { useContext } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import themeGroup from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { NavStyle } from "./Nav.style"

type NavProps = {
  isClosed: boolean
}

const Nav = ({ isClosed }: NavProps) => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <div css={NavStyle({ theme, isClosed })}>
      <div className="left-box">
        {themeMode === "light" ? (
          <StaticImage
            src="../../images/moon_off.png"
            width={30}
            quality={100}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="image"
          />
        ) : (
          <StaticImage
            src="../../images/moon_on.png"
            width={30}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            placeholder="blurred"
            className="image"
          />
        )}
        <Link className="home-title" to="/">
          Moon.log
        </Link>
      </div>
      <div className="right-box">
        <Link className="category" to="/">
          Blog
        </Link>
        <Link className="category" to="/portfolio">
          Portfolio
        </Link>
        <Link className="category" to="/about">
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
            className="image"
            onClick={onToggle}
          />
        )}
      </div>
    </div>
  )
}

export default Nav
