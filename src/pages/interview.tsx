import React, { useContext } from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import {
  PostContainer,
  PostNum,
  PostBox,
  PostTitle,
  PostDate,
  PostDes,
  PageNum,
} from "../../styles/postList"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/Layout"
import THEME, { Theme, ThemeGroup } from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"

const TechInterviewPage = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <Layout pageTitle="interview">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(theme)}>Tech Interview</div>
          <div css={Description(theme)}>
            기술 면접을 준비하며 정리한 개념들을 정리하였습니다.
          </div>
        </div>
        <div css={Box}>
          <div css={PostContainer}>
            <div css={PostNum(theme)}>01</div>
            <div css={PostBox}>
              <Link css={PostTitle(theme)} to="/interview/post-1">
                브라우저 동작 원리
              </Link>
              <div css={PostDes(theme)}>
                사용자가 웹사이트를 선택하여 들어갔을 때, 브라우저가 어떻게
                동작이 되어 사용자에게 보여지는 지에 대해서 정리하였습니다.
              </div>
              <div css={PostDate(theme)}>최종 수정일 : 2021-07-18</div>
            </div>
          </div>
        </div>
        <span css={PageNum}>05</span>
      </div>
    </Layout>
  )
}
export default TechInterviewPage
