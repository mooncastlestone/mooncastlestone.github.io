import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"


export const Container = (theme: Theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 0.1px solid #e0e0e0;
  padding: 0.5rem 1rem 0.3rem 1rem;
  background: ${theme.bgColor};
  opacity: 0.8;
  backdrop-filter: blur(10px);
  z-index: 1;

  @media (max-width: 375px) {
  }
`

export const LeftBox = css`
  display: flex;
  align-items: center;
`

export const RightBox = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Image = css`
  margin-right: 0.4rem;
  cursor: pointer;
`

export const Category = (theme: Theme) => css`
  padding-right: 1rem;
  text-decoration: none;
  color: ${theme.fontColor};

  &:hover {
    color: #9e9e9e;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`

export const Home = (theme: Theme) => css`
  text-decoration: none;
  color: ${theme.fontColor};

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`
