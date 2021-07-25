import React from "react"
import Layout from "../components/Layout"
import Category from "../components/Category"
import { graphql, useStaticQuery } from "gatsby"

const ReactNativePage = () => {
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
    <Layout pageTitle="react-native">
      <Category
        title="React Native"
        description="React Native를 사용하면서 공부한 것들을 정리하였습니다."
        postData={data}
        link="react-native"
      ></Category>
    </Layout>
  )
}

export default ReactNativePage
