import React, { useContext } from "react"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import { PageNum, postListContainer } from "../../styles/postList"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import Preparing from "../components/Preparing"
import Post from "../components/Post"

type CategoryProps = {
  title: string
  description: string
  postData: any
}

const categoryList = [
  "Javascript",
  "React",
  "React Native",
  "Gatsby",
  "Tech Interview",
]

const Category = ({ title, description, postData }: CategoryProps) => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const postList = postData.allMarkdownRemark.nodes

  return (
    <div css={Container}>
      <div css={Box}>
        <div css={Title(theme)}>{title}</div>
        <div css={Description(theme)}>{description}</div>
      </div>
      <div css={postListContainer}>
        {postList.length !== 0 ? (
          postList.map((el: any, idx: number) => (
            <Post
              key={el.id}
              num={idx + 1}
              title={el.frontmatter.title}
              description={el.frontmatter.description}
              date={el.frontmatter.date}
            ></Post>
          ))
        ) : (
          <Preparing />
        )}
      </div>

      <span css={PageNum}>{"0" + (categoryList.indexOf(title) + 1)}</span>
    </div>
  )
}

export default Category
