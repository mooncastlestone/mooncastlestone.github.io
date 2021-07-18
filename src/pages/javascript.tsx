import React from "react"
import Nav from "../components/Nav"
import { css } from "@emotion/react"
import { Box, Container, Title, Description } from "../../css/pageLayout"
import {Link} from "gatsby"

const JavascriptPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>Javascript</div>
          <div css={Description}>
            자바스크립트(ES6) 관련된 개념들을 정리하였습니다.
          </div>
        </div>
        <div css={Box}>
        </div>
      </div>
    </>
  )
}

export default JavascriptPage
