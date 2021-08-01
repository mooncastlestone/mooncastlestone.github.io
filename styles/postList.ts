import { css } from "@emotion/react"
import { Theme } from "./theme"

export const postListContainer = css`
  margin-top: 2rem;
  height: 100%;

  @media (max-width: 425px) {
    width: 100%;
    margin-top: 0rem;
  }
`

export const PostContainer = css`
  display: flex;
  width: 42rem;
  margin-top: 3rem;
  padding: 0 3rem 0rem 3rem;

  @media (max-width: 425px) {
    padding: 0rem;
    width: 100%;
    margin-top: 2.5rem;
  }
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
  height: 6rem;
`

export const PostTitle = (theme: Theme) => css`
  text-decoration: none;
  font-size: 1.2rem;
  color: ${theme.postTitle};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`

export const PostDes = (theme: Theme) => css`
  color: ${theme.fontColor};
  margin-top: -1rem;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`

export const PostDate = (theme: Theme) => css`
  font-size: 0.9rem;
  color: ${theme.fontColor};

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`

export const PageNum = () => css`
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: 20rem;
  line-height: 70%;
  color: #f4f4f4;

  @media (max-width: 1300px) {
    display: none;
  }
`
