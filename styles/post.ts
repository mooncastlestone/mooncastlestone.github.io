import { css } from "@emotion/react"
import { Theme } from "./theme"

export const Container = css`
  display: flex;
  width: 100%;
  height: 100vw;
  flex-direction: column;
  align-items: center;
`

export const CategoryName = (theme: Theme) => css`
  text-decoration: none;
  color: ${theme.categoryTitle};

  &: hover {
    text-decoration: underline;
  }
`

export const postBox = css`
  padding: 3rem 0 0 0;
  width: 55%;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Title = (theme: Theme) => css`
  color: ${theme.fontColor};
  margin-top: 0.5rem;

  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
`

export const Description = (theme: Theme) => css`
  font-size: 1.2rem;
  margin-top: 2rem;
  color: ${theme.fontColor};
  line-height: 2rem;

  @media (max-width: 420px) {
    font-size: 1.1rem;
  }
`

export const CommentBox = () => css`
`

