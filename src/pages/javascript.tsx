import React from "react"
import Nav from "../components/Nav"
import { css } from "@emotion/react"
import { Box, Container, ContentBox, Title } from "../../css/pageLayout"

const javascriptPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <span css={Title}>Javascript</span>
        </div>
        <div css={Box}>이미지</div>
        <div css={Box}>
          <div css={ContentBox}></div>
        </div>
      </div>
    </>
  )
}

export default javascriptPage
