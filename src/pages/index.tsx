import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "@emotion/styled"
import Sidebar from "../components/Sidebar"
import { Container } from "../../css/emotion"

const IndexPage = () => (
  <div css={Container}>
    <Layout>
      <Seo title="Home" />
      <p>안녕하세요. 여기는 메인페이지입니다.</p>
    </Layout>
  </div>
)

export default IndexPage
