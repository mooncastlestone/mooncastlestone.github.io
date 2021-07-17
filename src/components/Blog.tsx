import * as React from "react"
import PropTypes, { string } from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./Header"
import { css } from "@emotion/react"
import {Box, Container, ContentBox, Title} from "../../css/pageLayout"

interface props {
  children: any
  pageTitle?: string
}

const Blog = () => {
  return (
    <div css={Container}>
      <div css={[Box]}>
        <span css={Title}>BLOG</span>
      </div>
      <div css={Box}>이미지</div>
      <div css={Box}>
        <div css={ContentBox}>
        <Link css={Content} to="/javascript">Javasript</Link>
        <Link css={Content} to="/react">React</Link>
        <Link css={Content} to="/gatsby">Gatsby</Link>
        </div>
      </div>
    </div>
  )
}

export default Blog

const Content = css`
  border: 1px solid black;
  width: 13rem;
  height: 15rem;
  text-align: center;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`

