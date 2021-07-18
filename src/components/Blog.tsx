import * as React from "react"
import PropTypes, { string } from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css, Global, ThemeProvider } from "@emotion/react"
import useTheme from "../hook/useTheme"
import styled from "@emotion/styled"
import { default as THEME } from "../../styles/theme"
import GlobalStyle from "../../styles/globalStyle"
import ThemeSwitch from "../components/ThemeSwitch"
import Nav from "./Nav"

const Blog = () => {
  const [theme, onToggle] = useTheme()

  return (
    <>
      <Nav />
      <ThemeSwitch checked={theme === "dark"} toggleSwitch={onToggle} />
      <ThemeProvider theme={THEME[theme]}>
        <Global styles={GlobalStyle(THEME[theme])} />
        <div css={Container}>
          <span css={Title}>Blog</span>
          <div>
            <div css={CategoryBox}>
              <span css={Number}>01</span>
              <Link to="/javascript" css={Category}>
                Javascript
              </Link>
            </div>
            <div css={CategoryBox}>
              <span css={Number}>02</span>
              <Link to="/react" css={Category}>
                React
              </Link>
            </div>
            <div css={CategoryBox}>
              <span css={Number}>03</span>
              <Link to="/react-native" css={Category}>
                React Native
              </Link>
            </div>
            <div css={CategoryBox}>
              <span css={Number}>04</span>
              <Link to="/gatsby" css={Category}>
                Gatsby
              </Link>
            </div>
            <div css={CategoryBox}>
              <span>05</span>
              <Link to="/interview" css={Category}>
                Tech Interview
              </Link>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Blog

const Container = (theme: any) => css`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 5rem 0 0 15rem;
  flex-direction: column;

  color: ${theme.fontColor};
`
const Title = css`
  font-size: 2.5rem;
  border-bottom: 1px solid #bdbdbd;
  width: 7%;
  margin-left: 2rem;
  color: #616161;
  font-family: "Athiti";
`

const CategoryBox = css`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`
const Category = css`
  font-size: 2rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #616161;
  font-family: "Athiti";
`

const Number = css`
  font-family: "Athiti";
`
