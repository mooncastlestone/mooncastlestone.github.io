import React from "react"
import Layout from "../components/Layout"
import Category from "../components/Category"
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
      <Category
        title="React"
        description="SPA(Single Page Application) 개발을 진행하면서 공부한 것들을 정리하였습니다."
        postData={data}
      ></Category>
    </Layout>
  )
}

export default ReactPage
