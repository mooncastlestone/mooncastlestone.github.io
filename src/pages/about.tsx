import React, { useContext } from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Preparing from "../components/Preparing"
import Layout from "../components/Layout"
import THEME, { Theme, ThemeGroup } from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"

const AboutPage = () => {
  const [theme] = useContext(ThemeContext)

  return (
    <Layout pageTitle="about">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(THEME[theme])}>About</div>
          <div css={Description(THEME[theme])}>Seong Seok Moon</div>
        </div>
        <Preparing />
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage
