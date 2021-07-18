import React from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../css/pageLayout"
import { PageNum } from "../../css/postList"
import Preparing from "../components/Preparing"

const GatsbyPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>Gatsby</div>
          <div css={Description}>
            Gatsby 공식 문서를 참고하면서 관련 개념들을 정리하였습니다.
          </div>
        </div>
        <Preparing />
        <div css={Box}>
          <div></div>
        </div>
        <span css={PageNum}>04</span>
      </div>
    </>
  )
}

export default GatsbyPage
