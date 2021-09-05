import React from "react"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"

const ReactPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { regex: "/react/" } } }
      ) {
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
    <Layout pageTitle="react">
      <PostList
        postData={data}
        link="react"
      ></PostList>
    </Layout>
  )
}

export default ReactPage
