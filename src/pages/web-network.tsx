import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Category from "../components/Category"

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
      <Category
        title="Web & Network"
        description="웹과 네트워크에 대해서 정리하였습니다."
        postData={data}
        link="web-network"
      ></Category>
    </Layout>
  )
}
export default TechInterviewPage


