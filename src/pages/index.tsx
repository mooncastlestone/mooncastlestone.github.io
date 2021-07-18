import * as React from "react"
import Seo from "../components/Seo"
import "../../styles/style.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import useTheme from "../hooks/useTheme"
import THEME, { Theme } from "../../styles/theme"
import Layout from "../components/Layout"

const IndexPage = () => {
  const [theme, onToggle] = useTheme()

  return (
    <Layout>
      <Seo title="Home" />
      <div css={Container}>
        <span css={Title(THEME[theme])}>Blog</span>
        <div>
          <div css={CategoryBox}>
            <span css={Number(THEME[theme])}>01</span>
            <Link to="/javascript" css={Category(THEME[theme])}>
              Javascript
            </Link>
          </div>
          <div css={CategoryBox}>
            <span css={Number(THEME[theme])}>02</span>
            <Link to="/react" css={Category(THEME[theme])}>
              React
            </Link>
          </div>
          <div css={CategoryBox}>
            <span css={Number(THEME[theme])}>03</span>
            <Link to="/react-native" css={Category(THEME[theme])}>
              React Native
            </Link>
          </div>
          <div css={CategoryBox}>
            <span css={Number(THEME[theme])}>04</span>
            <Link to="/gatsby" css={Category(THEME[theme])}>
              Gatsby
            </Link>
          </div>
          <div css={CategoryBox}>
            <span css={Number(THEME[theme])}>05</span>
            <Link to="/interview" css={Category(THEME[theme])}>
              Tech Interview
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

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
