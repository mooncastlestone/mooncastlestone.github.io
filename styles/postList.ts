import { css } from "@emotion/react"

export const PostContainer = css`
  display: flex;
  width: 70%;
  height: 7rem;
  margin-top: 5rem;
`
export const PostNum = css`
    color: #757575
    font-size: 1.2rem;
`

export const PostBox = css`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const PostTitle = css`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`

export const PostDes = css`
  color: #757575;
`

export const PostDate = css`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #9e9e9e;
`

export const PageNum = css`
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 20rem;
  line-height: 70%;
  color: #f4f4f4;
`
