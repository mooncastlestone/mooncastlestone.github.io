import React, { useContext } from "react"
import { PostContainer } from "./Post.style"
import themeGroup from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { Link } from "gatsby"
import { PostProps } from "../../types/components"

const Post = ({ slug, title, description, date, link }: PostProps) => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const postNum = slug.split("/")[2]
  const num = postNum[postNum.length - 1]

  return (
    <li css={PostContainer(theme)}>
      <h1>
        <Link to={`/${link}/post-${num}`} className="post title">
          {title}
        </Link>
      </h1>
      <p className="post description">{description}</p>
      <strong className="post date">작성일 : {date}</strong>
    </li>
  )
}

export default Post
