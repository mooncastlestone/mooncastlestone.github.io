import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/Nav"
import {css} from "gatsby"
import {Container, CategoryName, postBox, Description} from "../../css/post"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  console.log(frontmatter.slug.split('/')[1])
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={postBox}>
          <div css={CategoryName}>{frontmatter.slug.split('/')[1]}</div>
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