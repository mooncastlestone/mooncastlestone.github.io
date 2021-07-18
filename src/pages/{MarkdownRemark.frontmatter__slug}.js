import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/Nav"
import { css, Link } from "gatsby"
import {
  Container,
  CategoryName,
  postBox,
  Description,
} from "../../styles/post"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const url = frontmatter.slug.split("/")[1]

  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={postBox}>
          <Link to={`/${url}`} css={CategoryName}>
            {url}
          </Link>
          <h1>{frontmatter.title}</h1>
          <div css={Description} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
