import React, { useContext } from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import themeGroup, { Theme } from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"

const Nav = () => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <div css={Container(theme)}>
      <div css={LeftBox}>
        {themeMode === "light" ? (
          <StaticImage
            src="../images/moon_off.png"
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
            src="../images/moon_on.png"
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
            src="../images/sun.png"
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
            src="../images/moon.png"
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

const Container = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 0.1px solid #e0e0e0;
  padding: 0.5rem 0 0.3rem 0;
  background: ${theme.bgColor};
  opacity: 0.8;
  backdrop-filter: blur(10px);
  z-index: 1;

  @media (max-width: 375px) {
  }
`

const LeftBox = css`
  display: flex;
  align-items: center;
`

const RightBox = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Image = css`
  margin-right: 0.4rem;
  cursor: pointer;
`

const Category = (theme: Theme) => css`
  padding-right: 1rem;
  text-decoration: none;
  color: ${theme.fontColor};

  &:hover {
    color: #9e9e9e;
  }

  @media (max-width: 420px) {
    font-size: 0.8rem
  }
`

const Home = (theme: Theme) => css`
  text-decoration: none;
  color: ${theme.fontColor};

  @media (max-width: 420px) {
    font-size: 0.8rem
  }
`
