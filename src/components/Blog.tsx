import * as React from "react"
import PropTypes, { string } from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "./Header"
import { css } from "@emotion/react"
import { Box, Container, Title } from "../../css/pageLayout"
import { StaticImage } from "gatsby-plugin-image"
import ContentList from './ContentList'

const Blog = () => {
  return (
    <div css={Container}>
      <div css={[Box]}>
        <span css={Title}>Blog</span>
      </div>
      <div css={Box}>
        <StaticImage
          src="../images/book.png"
          width={150}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          css={Image}
        />
      </div>
      <ContentList />
    </div>
  )
}

export default Blog

const Image = css`
  margin-top: 2rem;
`