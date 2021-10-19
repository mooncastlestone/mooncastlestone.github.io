import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"

const JavascriptPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { regex: "/javascript/" } } }
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
    <Layout pageTitle="Javascript" pageDes="자바스크립트 정리하는 공간">
      <PostList postData={data} link="javascript"></PostList>
    </Layout>
  )
}

export default JavascriptPage
