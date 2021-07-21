import React, { useContext } from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Preparing from "../components/Preparing"
import Layout from "../components/Layout"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <Layout pageTitle="about">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(theme)}>About</div>
          <div css={Description(theme)}>Seong Seok Moon</div>
        </div>
        <Preparing />
        <div css={Box}>
          {/* <div>안녕하세요. Typescript를 사용한 React 개발을 좋아하는 개발자 문성석입니다.</div> */}
          {/* <StaticImage
            src="../images/desktop.jpeg"
            width={400}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            placeholder="blurred"
          /> */}
        </div>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage
