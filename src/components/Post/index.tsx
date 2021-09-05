import React, { useContext } from "react"
import { PostContainer } from "./Post.style"
import themeGroup from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { Link } from "gatsby"

type PostProps = {
  slug: string
  title: string
  description: string
  date: string
  link: string
}

const Post = ({ slug, title, description, date, link }: PostProps) => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const postNum = slug.split("/")[2]
  const num = postNum[postNum.length - 1]

  return (
    <div css={PostContainer(theme)}>
      <Link className="post title" to={`/${link}/post-${num}`}>
        {title}
      </Link>
      <div className="post description">{description}</div>
      <div className="post date">작성일 : {date}</div>
    </div>
  )
}

export default Post
