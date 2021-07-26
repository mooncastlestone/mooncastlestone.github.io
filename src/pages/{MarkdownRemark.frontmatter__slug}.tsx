import React, { useContext } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import {
  Container,
  CategoryName,
  postBox,
  Description,
  Title,
  CommentBox,
} from "../../styles/post"
import Layout from "../components/Layout"
import { ThemeContext } from "../components/ThemeContext"
import THEME from "../../styles/theme"
import Utterances from "../components/Utterances"

export default function Template({ data }: any) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const url = frontmatter.slug.split("/")[1]
  const [themeMode] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <>
      <Layout>
        <div css={Container}>
          <div css={postBox}>
            <Link to={`/${url}`} css={CategoryName(theme)}>
              {url}
            </Link>
            <h1 css={Title(theme)}>{frontmatter.title}</h1>
            <div
              css={Description(theme)}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div css={CommentBox}>
              <Utterances
                repo="mooon3356/mooon3356.github.io"
                theme="github-light"
              ></Utterances>
            </div>
          </div>
        </div>
      </Layout>
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
