import React, { useContext } from "react"
import Seo from "../components/Seo"
import "../../styles/style.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import THEME, { Theme } from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"

const Blog = () => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <div css={Container}>
      <span css={Title(theme)}>Blog</span>
      <div>
        <div css={CategoryBox}>
          <span css={Number(theme)}>01</span>
          <Link to="/javascript" css={Category(theme)}>
            Javascript
          </Link>
        </div>
        <div css={CategoryBox}>
          <span css={Number(theme)}>02</span>
          <Link to="/react" css={Category(theme)}>
            React
          </Link>
        </div>
        <div css={CategoryBox}>
          <span css={Number(theme)}>03</span>
          <Link to="/react-native" css={Category(theme)}>
            React Native
          </Link>
        </div>
        <div css={CategoryBox}>
          <span css={Number(theme)}>04</span>
          <Link to="/gatsby" css={Category(theme)}>
            Gatsby
          </Link>
        </div>
        <div css={CategoryBox}>
          <span css={Number(theme)}>05</span>
          <Link to="/interview" css={Category(theme)}>
            Tech Interview
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog

const Container = () => css`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 5rem 0 0 15rem;
  flex-direction: column;
`

const Title = (theme: Theme) => css`
  font-size: 2.5rem;
  border-bottom: 1px solid #bdbdbd;
  width: 7%;
  margin-left: 2rem;
  font-family: "Athiti";

  color: ${theme.fontColor};
`

const CategoryBox = css`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`
const Category = (theme: Theme) => css`
  font-size: 2rem;
  margin-left: 1rem;
  text-decoration: none;
  font-family: "Athiti";

  color: ${theme.fontColor};
`

const Number = (theme: Theme) => css`
  font-family: "Athiti";

  color: ${theme.fontColor};
`
