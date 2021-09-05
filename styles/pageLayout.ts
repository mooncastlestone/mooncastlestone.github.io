import { css } from "@emotion/react"
import THEME, { Theme } from "../src/theme/theme"

export const Container = css`
  width: 100%;
  align-items: center;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  @media (max-width: 425px) {
    padding: 0 2rem 0 2rem;
  }
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

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`

export const Description = (theme: Theme) => css`
  margin-top: 1rem;
  color: ${theme.fontColor};

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`
