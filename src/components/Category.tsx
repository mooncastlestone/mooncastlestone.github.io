import React, { useContext, useEffect, useState } from "react"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import { CategoryNum, postListContainer } from "../../styles/postList"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import Preparing from "../components/Preparing"
import Post from "../components/Post"
import { css } from "@emotion/react"

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
  const [currentPageNum, setCurrentPageNum] = useState(1)
  const [currentPosts, setCurrentPosts] = useState([0, 1, 2])

  const sortedPostList = postList.sort((a, b) => {
    const aSlug = a.frontmatter.slug.split("/")[2]
    const bSlug = b.frontmatter.slug.split("/")[2]

    const aIndex = Number(aSlug[aSlug.length - 1])
    const bIndex = Number(bSlug[bSlug.length - 1])

    return bIndex - aIndex
  })

  const handleMakePage = () => {
    let pageNums = Math.ceil(sortedPostList.length / 3)
    let result = []
    for (let i = 1; i <= pageNums; i++) {
      result.push(i)
    }

    return result
  }

  const handleChangePage = (el:number) => {
    let num = el * 3
    setCurrentPosts([num - 3, num - 2, num - 1])
    setCurrentPageNum(el)
  }

  return (
    <div css={Container}>
      <div css={Box}>
        <div css={Title(theme)}>{title}</div>
        <div css={Description(theme)}>{description}</div>
      </div>
      <div css={postListContainer}>
        {sortedPostList.length !== 0 ? (
          sortedPostList.map((el: postType, idx: number) => {
            return idx === currentPosts[idx] ? (
              <Post
                key={el.id}
                slug={el.frontmatter.slug}
                title={el.frontmatter.title}
                description={el.frontmatter.description}
                date={el.frontmatter.date}
                link={link}
              ></Post>
            ) : null
          })
        ) : (
          <Preparing />
        )}
        {handleMakePage().length !== 1 ? (
          <div css={PageNumsBox}>
            {handleMakePage().map((el, idx) => (
              <span css={PageNum} key={idx + 1} onClick={(() => handleChangePage(el))}>
                {el}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <span css={CategoryNum}>{"0" + (categoryList.indexOf(title) + 1)}</span>
    </div>
  )
}

export default Category

const PageNumsBox = css`
  text-align: center;
  margin-top: 3rem;
`

const PageNum = css`
  margin-right: 1rem;
  cursor: pointer;
`
