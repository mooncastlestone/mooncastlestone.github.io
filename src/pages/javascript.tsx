import React, { useContext } from "react"
import Nav from "../components/Nav"
import { css } from "@emotion/react"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import { PageNum } from "../../styles/postList"
import { Link } from "gatsby"
import Preparing from "../components/Preparing"
import Layout from "../components/Layout"
import THEME, { Theme, ThemeGroup } from "../../styles/theme"
import useTheme from "../hooks/useTheme"
import { ThemeContext } from "../components/ThemeContext"

const JavascriptPage = () => {
  const [theme] = useContext(ThemeContext)

  console.log(theme)

  return (
    <Layout pageTitle="javascript">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(THEME[theme])}>Javascript</div>
          <div css={Description(THEME[theme])}>
            자바스크립트(ES6) 관련된 개념들을 정리하였습니다.
          </div>
        </div>
        <Preparing />
        <div css={Box}></div>
        <span css={PageNum}>01</span>
      </div>
    </Layout>
  )
}

export default JavascriptPage
