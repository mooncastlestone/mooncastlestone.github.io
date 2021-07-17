/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes, { string } from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./Header"
import "../../css/style.css"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import {
  Container,
  LayoutContainer,
  Sidebar,
  ContentBox,
} from "../../css/emotion"

interface props {
  children: any
  pageTitle?: string
}

const Layout = ({ pageTitle, children }: props) => {
  return (
    <main css={LayoutContainer}>
      <div css={Sidebar}>
        <div>개발자 문성석</div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div css={ContentBox}> {children}</div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
