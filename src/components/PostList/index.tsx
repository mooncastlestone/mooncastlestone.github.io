import React, { useContext, useState } from "react"
import { PostListContainer } from "./PostList.style"
import themeGroup from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import Post from "../Post"
import Preparing from "../Preparing"

type PostListProps = {
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

const PostList = ({ postData, link }: PostListProps) => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const postList: postType[] = postData.allMarkdownRemark.nodes

  if (link !== "home") {
    const sortedPostList = postList.sort((a, b) => {
      const aSlug = a.frontmatter.slug.split("/")[2]
      const bSlug = b.frontmatter.slug.split("/")[2]

      const aIndex = Number(aSlug[aSlug.length - 1])
      const bIndex = Number(bSlug[bSlug.length - 1])

      return bIndex - aIndex
    })

    return (
      <div css={PostListContainer}>
        {sortedPostList.length !== 0 ? (
          sortedPostList.map((el: postType) => (
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
          <Preparing></Preparing>
        )}
      </div>
    )
  } else {
    postList.sort((a, b) => {
      return (
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
      )
    })

    return (
      <div css={PostListContainer}>
        {postList.map(el => (
          <Post
            key={el.id}
            slug={el.frontmatter.slug}
            title={el.frontmatter.title}
            description={el.frontmatter.description}
            date={el.frontmatter.date}
            link={el.frontmatter.slug.split("/")[1]}
          ></Post>
        ))}
      </div>
    )
  }
}

export default PostList
