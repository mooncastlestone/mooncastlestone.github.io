import React, { useContext } from "react"
import { graphql } from "gatsby"
import { Container } from "../../styles/markdown"
import Layout from "../components/Layout"
import { ThemeContext } from "../theme/ThemeContext"
import THEME from "../theme/theme"
import Utterances from "../components/Utterances"

type templateProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string
        slug: string
        title: string
        description: string
      }
      html: string
    }
  }
}

export default function Template({ data }: templateProps) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const [themeMode] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <>
      <Layout pageTitle={frontmatter.title} pageDes={frontmatter.description}>
        <div css={Container(theme)}>
          <div className="post-box">
            <div className="post-introbox">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-date">{frontmatter.date}</div>
            </div>
            <div
              className="post-description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="comment-box">
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
        description
      }
    }
  }
`
