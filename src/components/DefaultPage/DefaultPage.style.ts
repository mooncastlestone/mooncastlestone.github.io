import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const Container = () => css`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 6rem 0 0 10rem;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 4rem 0 0 3rem;
  }
`
export const Title = (theme: Theme) => css`
  font-size: 2.5rem;
  border-bottom: 1px solid #bdbdbd;
  width: 5rem;
  margin-left: 2rem;
  font-family: "Athiti";

  color: ${theme.fontColor};

  @media (max-width: 375px) {
    font-size: 2rem;
    width: 4rem;
  }
`
export const CategoryBox = css`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`
export const Category = (theme: Theme) => css`
  font-size: 2rem;
  margin-left: 1rem;
  text-decoration: none;
  font-family: "Athiti";
  color: ${theme.fontColor};

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`

export const Number = (theme: Theme) => css`
  font-family: "Athiti";

  color: ${theme.fontColor};
`
