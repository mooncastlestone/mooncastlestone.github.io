import * as React from "react"
import Blog from "../components/Blog"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Preparing from "../components/Preparing"

const AboutPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>About</div>
          <div css={Description}>Seong Seok Moon</div>
        </div>
        <Preparing />
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </>
  )
}
// Step 3: Export your component
export default AboutPage
