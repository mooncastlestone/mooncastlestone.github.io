import React from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../css/pageLayout"

const gatsbyPage = () => {
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
        <div css={Box}>이미지</div>
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default gatsbyPage
