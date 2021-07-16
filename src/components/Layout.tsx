/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
// import "./Layout.css"
import styled from "@emotion/styled"
import Sidebar from "./Sidebar"
import ContentBox from './ContentBox'

type Props = {
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Sidebar></Sidebar>
      <ContentBox></ContentBox>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  margin: 4rem;
`