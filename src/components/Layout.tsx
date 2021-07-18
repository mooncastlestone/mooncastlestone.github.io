/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./Nav"
import GlobalStyle from "../../styles/globalStyle"
import { css, Global, ThemeProvider } from "@emotion/react"
import ThemeSwitch from "../components/ThemeSwitch"
import useTheme from "../hooks/useTheme"
import { default as THEME } from "../../styles/theme"


type Props = {
  children?: any
  pageTitle?: string
}

const Layout = ({ pageTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, onToggle] = useTheme()

  // const handleDarkMode = () => {
  //   onToggle()
  // }


  return (
      <ThemeProvider theme={THEME[theme]}>
        <Global styles={GlobalStyle(THEME[theme])} />
        <Nav theme={theme} onToggle={onToggle}/>
        <div>{children}</div>
      </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
