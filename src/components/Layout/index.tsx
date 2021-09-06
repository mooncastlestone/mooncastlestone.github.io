import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../../../styles/globalStyle"
import { css, Global } from "@emotion/react"
import themeGroup from "../../theme/theme"
import SideBar from "../SideBar/index"
import { ThemeContext } from "../../theme/ThemeContext"
import DarkmodeToggle from "../DarkmodeToggle"
import PostList from "../PostList"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

type Props = {
  children?: any
  pageTitle?: string
}

const Layout = ({ pageTitle, children }: Props) => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            date
            slug
            description
          }
          html
        }
      }
    }
  `)

  return (
    <>
      <Global styles={GlobalStyle(theme, isOpen)} />
      <div className="nav">
        <div onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </div>
        <DarkmodeToggle />
      </div>
      <div>
        <SideBar isOpen={isOpen} pageTitle={pageTitle} />
        {pageTitle === "home" ? (
          <div css={childrenContainer}>
            <PostList
              isOpen={isOpen}
              handleSideBar={setIsOpen}
              postData={data}
              link="home"
            ></PostList>
          </div>
        ) : (
          <div css={childrenContainer}>{children}</div>
        )}
      </div>
    </>
  )
}

export default Layout

const childrenContainer = css`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 425px) {
    justify-content: center;
  }
`
