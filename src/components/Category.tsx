import React, { useContext, useState } from "react"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import {
  CategoryNum,
  postListContainer,
  PageNum,
  PageNumsBox,
} from "../../styles/postList"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import Preparing from "../components/Preparing"
import Post from "../components/Post"

type CategoryProps = {
  title: string
  description: string
  postData: any
  link: string
}

type frontmatterType = {
  date: string
  description: string
  slug: string
  title: string
}

type postType = {
  frontmatter: frontmatterType
  html: string
  id: string
}

const categoryList = [
  "Javascript",
  "React",
  "React Native",
  "Gatsby",
  "Tech Interview",
]

const Category = ({ title, description, postData, link }: CategoryProps) => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const postList: postType[] = postData.allMarkdownRemark.nodes

  const sortedPostList = postList.sort((a, b) => {
    const aSlug = a.frontmatter.slug.split("/")[2]
    const bSlug = b.frontmatter.slug.split("/")[2]

    const aIndex = Number(aSlug[aSlug.length - 1])
    const bIndex = Number(bSlug[bSlug.length - 1])

    return bIndex - aIndex
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [currentPosts, setCurrentPosts] = useState(sortedPostList.slice(0, 3))

  const handleMakePage = () => {
    let pageNums = Math.ceil(sortedPostList.length / 3)
    let result = []
    for (let i = 1; i <= pageNums; i++) {
      result.push(i)
    }
    return result
  }

  const handleChangePage = (el: number) => {
    let num = el * 3
    setCurrentPage(el)
    setCurrentPosts([
      sortedPostList[num - 3],
      sortedPostList[num - 2],
      sortedPostList[num - 1],
    ])
  }

  return (
    <div css={Container}>
      <div css={Box}>
        <div css={Title(theme)}>{title}</div>
        <div css={Description(theme)}>{description}</div>
      </div>
      <div css={postListContainer}>
        {sortedPostList.length !== 0 ? (
          currentPosts.map((el: postType) =>
            el === undefined ? (
              <div></div>
            ) : (
              <Post
                key={el.id}
                slug={el.frontmatter.slug}
                title={el.frontmatter.title}
                description={el.frontmatter.description}
                date={el.frontmatter.date}
                link={link}
              ></Post>
            )
          )
        ) : (
          <Preparing />
        )}
        {handleMakePage().length !== 1 ? (
          <div css={PageNumsBox}>
            {handleMakePage().map((el, idx) =>
              el === currentPage ? (
                <span
                  style={{ fontWeight: "bold" }}
                  css={PageNum(theme)}
                  key={idx + 1}
                  onClick={() => handleChangePage(el)}
                >
                  {el}
                </span>
              ) : (
                <span
                  style={{ fontWeight: "lighter" }}
                  css={PageNum(theme)}
                  key={idx + 1}
                  onClick={() => handleChangePage(el)}
                >
                  {el}
                </span>
              )
            )}
          </div>
        ) : null}
      </div>

      <span css={CategoryNum}>{"0" + (categoryList.indexOf(title) + 1)}</span>
    </div>
  )
}

export default Category
