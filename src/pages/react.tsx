import React from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import { PageNum } from "../../styles/postList"
import { css } from "@emotion/react"
import Preparing from "../components/Preparing"
import Layout from "../components/Layout"

const ReactPage = () => {
  return (
    <Layout>
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>React</div>
          <div css={Description}>
            SPA(Single Page Application) 개발을 진행하면서 공부한 것들을
            정리하였습니다.
          </div>
        </div>
        <div css={Box}>
          <Preparing />
        </div>
        <span css={PageNum}>02</span>
      </div>
    </Layout>
  )
}

export default ReactPage
