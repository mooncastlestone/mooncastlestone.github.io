import { css } from "@emotion/react"
import { Theme } from "./theme"

export const postListContainer = css`
  margin-top: 2rem;
`

export const PostContainer = css`
  display: flex;
  width: 42rem;
  height: 6rem;
  margin-top: 3rem;
  padding: 0 3rem 0rem 3rem;

`
export const PostNum = (theme: Theme) => css`
  font-size: 1.2rem;
  color: ${theme.fontColor};
`

export const PostBox = css`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PostTitle = (theme: Theme) => css`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${theme.postTitle};

  &:hover {
    text-decoration: underline;
  }
`

export const PostDes = (theme: Theme) => css`
  color: ${theme.fontColor};
  margin-top: -1rem;
`

export const PostDate = (theme: Theme) => css`
  font-size: 0.9rem;
  color: ${theme.fontColor};
`

export const PageNum = () => css`
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 20rem;
  line-height: 70%;
  color: #f4f4f4;
`
