import { css } from "@emotion/react"
import THEME, { Theme } from "../src/theme/theme"

export const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  border: 1px solid black;

  @media (max-width: 425px) {
    padding: 0 2rem 0 2rem;
  }
`

export const Box = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
