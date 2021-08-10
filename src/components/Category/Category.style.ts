import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const CategoryContainer = css`
margin-top: 2rem;
height: 100%;

@media (max-width: 425px) {
  width: 100%;
  margin-top: 0rem;
}
`

export const CategoryNum = () => css`
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

export const PageNumsBox = css`
text-align: center;
margin-top: 3rem;
`

export const PageNum = (theme:Theme) => css`
margin-right: 1rem;
cursor: pointer;
color: ${theme.fontColor}
`
