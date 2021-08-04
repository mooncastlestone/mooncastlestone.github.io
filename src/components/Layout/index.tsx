import React, { useContext } from "react"
import PropTypes from "prop-types"
import Nav from "../Nav"
import GlobalStyle from "../../../styles/globalStyle"
import { css, Global } from "@emotion/react"
import themeGroup from "../../theme/theme"
import Blog from "../DefaultPage/index"
import { ThemeContext } from "../../theme/ThemeContext"

interface Props {
  children?: any
  pageTitle?: string
}

const Layout = ({ pageTitle, children }: Props) => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <>
      <Global styles={GlobalStyle(theme)} />
      <Nav />
      {pageTitle === "home" ? (
        <Blog />
      ) : (
        <div css={childrenContainer}>{children}</div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const childrenContainer = css`
  margin-top: 4rem;

`
