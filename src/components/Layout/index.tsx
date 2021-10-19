import React, { useContext, useState } from "react"
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
import { LayoutProps } from "../../types/components"
import SEO from "../Seo"

const Layout = ({ pageTitle, pageDes, children }: LayoutProps) => {
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
      <SEO title={pageTitle} description={pageDes} />
      <div className="nav">
        <div onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </div>
        <DarkmodeToggle />
      </div>
      <div>
        <SideBar isOpen={isOpen} pageTitle={pageTitle} />
        {pageTitle === "Home" ? (
          <div css={childrenContainer}>
            <PostList isOpen={isOpen} postData={data} link="home"></PostList>
          </div>
        ) : (
          <div
            onClick={() => {
              if (isOpen) setIsOpen(false)
            }}
            css={childrenContainer}
          >
            {children}
          </div>
        )}
      </div>
    </>
  )
}

export default Layout

const childrenContainer = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 4rem;

  @media (max-width: 425px) {
    justify-content: center;
  }
`
