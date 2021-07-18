import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ThemeSwitch from "./ThemeSwitch"
import THEME, { Theme } from "../../styles/theme"

interface NavProps {
  onToggle: () => void
  theme: "dark" | "light"
}

const Nav = ({ theme, onToggle }: NavProps) => {
  return (
    <div css={Container}>
      <div css={LeftBox}>
        <StaticImage
          src="../images/moon_off.png"
          width={30}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          css={Image}
        />
        <Link css={Home(THEME[theme])} to="/">
          Moon.log
        </Link>
      </div>
      <div css={RightBox}>
        <Link css={Category(THEME[theme])} to="/">
          Blog
        </Link>
        <Link css={Category(THEME[theme])} to="/portfolio">
          Portfolio
        </Link>
        <Link css={Category(THEME[theme])} to="/about">
          About
        </Link>
        <ThemeSwitch checked={theme === "dark"} toggleSwitch={onToggle} />
      </div>
    </div>
  )
}

export default Nav

const Container = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1px solid #e0e0e0;
  padding: 0.5rem 0 0.3rem 0;
`

const LeftBox = css`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightBox = css`
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = css`
  margin-right: 0.4rem;
`

const Category = (theme:Theme) => css`
  padding-right: 1rem;
  text-decoration: none;
  color: ${theme.fontColor};

  &:hover {
    color: black;
  }
`

const Home = (theme: Theme) => css`
  text-decoration: none;
  color: ${theme.fontColor};
`
