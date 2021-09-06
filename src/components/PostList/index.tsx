import React, { useContext, useState } from "react"
import { PostListContainer } from "./PostList.style"
import themeGroup from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import Post from "../Post"
import Preparing from "../Preparing"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

type PostListProps = {
  postData: any
  link: string
  handleSideBar: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
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

const PostList = ({ postData, link, handleSideBar, isOpen }: PostListProps) => {
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
      <div css={PostListContainer(theme, isOpen)}>
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
      <div css={PostListContainer(theme, isOpen)}>
        {postList.map(el =>
          el.frontmatter.slug ? (
            <Post
              key={el.id}
              slug={el.frontmatter.slug}
              title={el.frontmatter.title}
              description={el.frontmatter.description}
              date={el.frontmatter.date}
              link={el.frontmatter.slug.split("/")[1]}
            ></Post>
          ) : null
        )}
      </div>
    )
  }
}

export default PostList
