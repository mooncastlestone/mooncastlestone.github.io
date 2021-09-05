import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const PostListContainer = css`
  width: 83%;
  height: 100%;
  padding: 3rem 0 0 7rem;

  @media (max-width: 425px) {
    width: 100%;
    margin-top: 0rem;
  }
`