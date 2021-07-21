import React, { useContext } from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Preparing from "../components/Preparing"
import Layout from "../components/Layout"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"

const PortfolioPage = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <Layout pageTitle="portfolio">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(theme)}>Portfolio</div>
          <div css={Description(theme)}>
            개발자 문성석의 포트폴리오입니다.
          </div>
        </div>
        <Preparing />
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </Layout>
  )
}
export default PortfolioPage
