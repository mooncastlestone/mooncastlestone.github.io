import React, { useContext } from "react"
import { Link } from "gatsby"
import THEME, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { css } from "@emotion/react"

type CategoryTitleProps = {
  link: string
  children: string
}

function CategoryTitle({ link, children }: CategoryTitleProps) {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = THEME[themeMode]
  return (
    <Link to={link} css={Category(theme)}>
      {children}
    </Link>
  )
}

export default CategoryTitle

export const Category = (theme: Theme) => css`
  font-size: 1.2rem;
  text-decoration: none;
  font-family: "Athiti";
  color: ${theme.fontColor};
  margin-top: 0.4rem;

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }

  &:hover {
      color: black;
      font-weight: bolder;
  }
`
