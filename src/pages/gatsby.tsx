import React, { useContext } from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Layout from "../components/Layout"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
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

const GatsbyPage = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <Layout pageTitle="gatsby">
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title(theme)}>Gatsby</div>
          <div css={Description(theme)}>
            Gatsby 공식 문서를 참고하면서 관련 개념들을 정리하였습니다.
          </div>
        </div>
        {/* <Preparing /> */}
        <div css={Box}>
          <div css={PostContainer}>
            <div css={PostNum(theme)}>01</div>
            <div css={PostBox}>
              <Link css={PostTitle(theme)} to="/gatsby/post-1">
                Gatsby 프로젝트에 단위 테스트 세팅하기
              </Link>
              <div css={PostDes(theme)}>
                Gatsby에 Jest 테스팅 프레임워크를 사용한 세팅 과정에 대해서
                정리하였습니다.
              </div>
              <div css={PostDate(theme)}>최종 수정일 : 2021-07-18</div>
            </div>
          </div>
        </div>
        <span css={PageNum}>04</span>
      </div>
    </Layout>
  )
}

export default GatsbyPage
