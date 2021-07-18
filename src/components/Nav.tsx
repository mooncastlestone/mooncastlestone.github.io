import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import useTheme from "../hook/useTheme"
import ThemeSwitch from "../components/ThemeSwitch"

const Nav = () => {
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
        <Link css={Home} to="/">
          Moon.log
        </Link>
      </div>
      <div css={RightBox}>
        <Link css={Category} to="/">
          Blog
        </Link>
        <Link css={Category} to="/portfolio">
          Portfolio
        </Link>
        <Link css={Category} to="/about">
          About
        </Link>
      </div>
    </div>
  )
}

export default Nav

const Container = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.5rem 0 0.3rem 0;
`

const LeftBox = css`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightBox = css`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = css`
  margin-right: 0.4rem;
`

const Category = css`
  padding-right: 1rem;
  text-decoration: none;
  color: #616161;

  &:hover {
    color: black;
  }
`

const Home = css`
  text-decoration: none;
  color: black;
`
