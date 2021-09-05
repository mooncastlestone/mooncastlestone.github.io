import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

const TechInterviewPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { regex: "/web-network/" } } }
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
    <Layout pageTitle="web-network">
      <PostList
        postData={data}
        link="web-network"
      ></PostList>
    </Layout>
  )
}
export default TechInterviewPage
