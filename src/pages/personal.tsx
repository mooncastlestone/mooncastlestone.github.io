import React from "react"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"

const PersonalPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { regex: "/personal/" } } }
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
    <Layout pageTitle="Personal" pageDes="개인적인 경험들을 정리하는 공간">
      <PostList
        postData={data}
        link="personal"
      ></PostList>
    </Layout>
  )
}

export default PersonalPage
