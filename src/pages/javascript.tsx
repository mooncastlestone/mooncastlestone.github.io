import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Category from "../components/Category"

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
    <Layout pageTitle="javascript">
      <Category
        title="Javascript"
        description="자바스크립트(ES6) 관련된 개념들을 정리하였습니다."
        postData={data}
        link="javascript"
      ></Category>
    </Layout>
  )
}

export default JavascriptPage
