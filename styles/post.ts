import { css } from "@emotion/react"
import {Theme} from "./theme"

export const Container = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`

export const CategoryName = (theme:Theme) => css`
  text-decoration: none;
  color: ${theme.categoryTitle};

  &: hover {
    text-decoration: underline
  }
`

export const postBox = css`
    padding: 3rem 0 0 0;
`

export const Title = (theme:Theme) => css`
  color: ${theme.fontColor}
`

export const Description = (theme:Theme) => css`
    font-size: 1.2rem;
    margin-top: 2rem;
    color: ${theme.fontColor}

`
