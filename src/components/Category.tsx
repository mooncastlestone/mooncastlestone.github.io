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

  return (
    <div css={Container}>
      <div css={Box}>
        <div css={Title(theme)}>{title}</div>
        <div css={Description(theme)}>{description}</div>
      </div>
      <div css={postListContainer}>
        {sortedPostList.length !== 0 ? (
          sortedPostList.map((el: postType, idx: number) => (
            <Post
              key={el.id}
              slug={el.frontmatter.slug}
              title={el.frontmatter.title}
              description={el.frontmatter.description}
              date={el.frontmatter.date}
              link={link}
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
