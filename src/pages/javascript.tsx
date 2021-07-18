import React from "react"
import Nav from "../components/Nav"
import { css } from "@emotion/react"
import { Box, Container, Title, Description } from "../../css/pageLayout"
import {
  PostContainer,
  PostNum,
  PostBox,
  PostTitle,
  PostDate,
  PostDes,
  PageNum,
} from "../../css/postList"
import { Link } from "gatsby"
import Preparing from "../components/Preparing"

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
        <Preparing />
        <div css={Box}></div>
        <span css={PageNum}>01</span>
      </div>
    </>
  )
}

export default JavascriptPage
