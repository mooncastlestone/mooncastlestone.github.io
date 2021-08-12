import { css } from "@emotion/react"
import { Theme } from "../src/theme/theme"

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
  width: 45%;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Title = (theme: Theme) => css`
  color: ${theme.mdFontColor};
  margin-top: 1rem;

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }
`

export const Description = (theme: Theme) => css`
  font-size: 1.1rem;
  margin-top: 2rem;
  color: ${theme.mdFontColor};
  line-height: 2rem;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`

export const CommentBox = () => css`
  margin-bottom: 3rem;
`

export const TocContainer = (theme: Theme) => css`
position: fixed;
border-left: 1px solid #BDBDBD;
top: 1;
right: 0;
width: 17rem;
padding: 0 2rem 0 1rem;

`

export const TocBox = (theme:Theme) => css`

`