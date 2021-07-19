import React, { useContext } from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import { PageNum } from "../../styles/postList"
import Preparing from "../components/Preparing"
import Layout from "../components/Layout"
import THEME, { Theme, ThemeGroup } from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"

const GatsbyPage = () => {
  const [theme] = useContext(ThemeContext)

  return (
    <Layout pageTitle="gatsby">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(THEME[theme])}>Gatsby</div>
          <div css={Description(THEME[theme])}>
            Gatsby 공식 문서를 참고하면서 관련 개념들을 정리하였습니다.
          </div>
        </div>
        <Preparing />
        <div css={Box}>
          <div></div>
        </div>
        <span css={PageNum}>04</span>
      </div>
    </Layout>
  )
}

export default GatsbyPage
