import React, { useContext } from "react"
import {
  PostContainer,
  PostNum,
  PostBox,
  PostTitle,
  PostDate,
  PostDes,
  PageNum,
} from "../../styles/postList"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import { Link } from "gatsby"

type PostProps = {
  num: string
  title: string
  description: string
  date: string
}

const Post = ({ num, title, description, date }: PostProps) => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  return (
    <div css={PostContainer}>
      <div css={PostNum(theme)}>{num}</div>
      <div css={PostBox}>
        <Link css={PostTitle(theme)} to={`/gatsby/post-${num}`}>
          {title}
        </Link>
        <div css={PostDes(theme)}>{description}</div>
        <div css={PostDate(theme)}>{date}</div>
      </div>
    </div>
  )
}

export default Post
