import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Category from "../components/Category"

const TechInterviewPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { regex: "/interview/" } } }
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
    <Layout pageTitle="interview">
      <Category
        title="Tech Interview"
        description="기술 면접을 준비하며 정리한 개념들을 정리하였습니다."
        postData={data}
      ></Category>
    </Layout>
  )
}
export default TechInterviewPage
