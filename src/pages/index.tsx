import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "@emotion/styled"
import Sidebar from '../components/Sidebar'

const IndexPage = () => (
    <Layout>
      <Seo title="Home" />
      <Sidebar />  
    </Layout>

)

export default IndexPage
