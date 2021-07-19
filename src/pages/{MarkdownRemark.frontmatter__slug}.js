import React, { useContext } from "react"
import { graphql } from "gatsby"
import Nav from "../components/Nav"
import { css, Link } from "gatsby"
import {
  Container,
  CategoryName,
  postBox,
  Description,
  Title,
} from "../../styles/post"
import Layout from "../components/Layout"
import { ThemeContext } from "../components/ThemeContext"
import THEME from "../../styles/theme"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const url = frontmatter.slug.split("/")[1]
  const [themeMode] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <Layout>
      <div css={Container}>
        <div css={postBox}>
          <Link to={`/${url}`} css={CategoryName(theme)}>
            {url}
          </Link>
          <h1 css={Title(theme)}>{frontmatter.title}</h1>
          <div css={Description(theme)} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
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
