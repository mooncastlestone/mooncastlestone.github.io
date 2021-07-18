import * as React from "react"
import Seo from "../components/Seo"
import "../../styles/style.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import useTheme from "../hooks/useTheme"
import THEME, { Theme } from "../../styles/theme"
import Layout from "../components/Layout"

const IndexPage = () => {

  return (
    <Layout pageTitle="home">
      <Seo title="Home" />
    </Layout>
  )
}

export default IndexPage
