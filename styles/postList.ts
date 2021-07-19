import { css } from "@emotion/react"
import { Theme } from "./theme"

export const PostContainer = css`
  display: flex;
  width: 70%;
  height: 7rem;
  margin-top: 5rem;
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
`

export const PostDate = (theme: Theme) => css`
  margin-top: 1rem;
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
