import { css } from "@emotion/react"
import THEME, { Theme } from "../styles/theme"

export const Container = css`
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Box = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: black;
`

export const Title = (theme: Theme) => css`
  font-size: 2.5rem;
  padding-bottom: 0.5rem;
  text-align: center;

  color: ${theme.fontColor};
  border-bottom: 1px solid ${theme.fontColor};
`

export const Description = (theme: Theme) => css`
  margin-top: 1rem;
  color: #757575;
  color: ${theme.fontColor};
`
