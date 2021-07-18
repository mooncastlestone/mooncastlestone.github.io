import * as React from "react"
import Blog from "../components/Blog"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../css/pageLayout"

const AboutPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>About</div>
          <div css={Description}>Seong Seok Moon</div>
        </div>
        <div css={Box}>준비중입니다</div>
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </>
  )
}
// Step 3: Export your component
export default AboutPage
