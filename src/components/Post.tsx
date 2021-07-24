import React, { useContext } from "react"
import {
  PostContainer,
  PostNum,
  PostBox,
  PostTitle,
  PostDate,
  PostDes,
} from "../../styles/postList"
import themeGroup from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import { Link } from "gatsby"

type PostProps = {
  slug: string
  title: string
  description: string
  date: string
}

const Post = ({ slug, title, description, date }: PostProps) => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]
  const postNum = slug.split('/')[2]
  const num = postNum[postNum.length-1]
  console.log(num)

  return (
    <div css={PostContainer}>
      <div css={PostNum(theme)}>{`-`}</div>
      <div css={PostBox}>
        <Link css={PostTitle(theme)} to={`/gatsby/post-${num}`}>
          {title}
        </Link>
        <div css={PostDes(theme)}>{description}</div>
        <div css={PostDate(theme)}>작성일 : {date}</div>
      </div>
    </div>
  )
}

export default Post
