import * as React from "react"
import Seo from "../components/Seo"
import "../../styles/style.css"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="home">
      <Seo title="Home" />
    </Layout>
  )
}

export default IndexPage
