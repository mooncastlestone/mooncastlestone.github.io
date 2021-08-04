import React, { useContext } from "react"
import "../../../styles/style.css"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import THEME, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import {
  Category,
  CategoryBox,
  Container,
  Number,
  Title,
} from "./DefaultPage.style"

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
