import React from "react"
import Layout from "../components/Layout"
import Category from "../components/Category"
import { graphql, useStaticQuery } from "gatsby"

const GatsbyPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { regex: "/gatsby/" } } }
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
    <Layout pageTitle="gatsby">
      <Category
        title="Gatsby"
        description="Gatsby 공식 문서를 참고하면서 관련 개념들을 정리하였습니다."
        postData={data}
        link={'gatsby'}
      ></Category>
    </Layout>
  )
}

export default GatsbyPage
