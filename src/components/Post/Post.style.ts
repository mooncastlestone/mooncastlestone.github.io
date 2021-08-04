import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

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
  height: 5.7rem;
  position: relative;
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
  margin-top: -0.8rem;

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
