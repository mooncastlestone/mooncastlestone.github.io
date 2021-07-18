import React from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../css/pageLayout"
import { css } from "@emotion/react"

const ReactNativePage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>React Native</div>
          <div css={Description}>
            React Native 개발을 진행하면서 공부한 것들을 정리하였습니다.
          </div>
        </div>
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default ReactNativePage
