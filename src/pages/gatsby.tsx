import React from "react"
import Nav from "../components/Nav"
import { Box, Container, ContentBox, Title } from "../../css/pageLayout"

const gatsbyPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <span css={Title}>Gatsby</span>
        </div>
        <div css={Box}>이미지</div>
        <div css={Box}>
          <div css={ContentBox}></div>
        </div>
      </div>
    </>
  )
}

export default gatsbyPage
