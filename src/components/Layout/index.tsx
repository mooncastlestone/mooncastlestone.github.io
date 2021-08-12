import React, { useContext, useEffect, useState } from "react"
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
  const [previousY, setPreviousY] = useState(0)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let currentY = window.pageYOffset
      if (currentY > 100 && previousY < currentY) {
        setIsClosed(true)
      } else if (currentY <= 100 || previousY > currentY) {
        setIsClosed(false)
      }
      setPreviousY(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [previousY])

  return (
    <>
      <Global styles={GlobalStyle(theme)} />
      <Nav isClosed={isClosed} />
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
