import React, { useContext, useState } from "react"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Layout from "../components/Layout"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import { PageNum, PostContainer, postListContainer } from "../../styles/postList"
import Post from "../components/Post"

const GatsbyPage = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const [postList, setPostList] = useState([
    {
      num: "1",
      title: "Gatsby 프로젝트에 단위 테스트 세팅하기",
      description:
        "Gatsby에 Jest 테스팅 프레임워크를 사용한 세팅 과정에 대해서 정리하였습니다.",
      date: "July 18th, 2021",
    },
    {
      num: "2",
      title: "Gatsby를 사용한 블로그 제작 회고",
      description:
        "Gatsby를 사용하여 이 웹사이트를 제작하는 과정에서 느꼈던 점들과 생각들을 정리하였습니다.",
      date: "July 22th, 2021",
    },
  ])

  return (
    <Layout pageTitle="gatsby">
      <div css={Container}>
        <div css={Box}>
          <div css={Title(theme)}>Gatsby</div>
          <div css={Description(theme)}>
            Gatsby를 활용한 블로그 제작 과정들을 정리하였습니다.
          </div>
        </div>
        <div css={postListContainer}>
          {postList.map(el => (
            <Post
              num={el.num}
              title={el.title}
              description={el.description}
              date={el.date}
            ></Post>
          ))}
        </div>
      </div>
      <span css={PageNum}>04</span>
    </Layout>
  )
}

export default GatsbyPage
