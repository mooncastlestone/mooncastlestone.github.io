import React, { useContext } from "react"
import { Link } from "gatsby"
import THEME, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { css } from "@emotion/react"
import { CategoryTitleProps } from "../../types/components"

function CategoryTitle({ link, children, currentPage }: CategoryTitleProps) {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = THEME[themeMode]
  return (
    <li css={Wrapper(theme, currentPage, link)}>
      <Link className="title" to={link}>
        {children}
      </Link>
    </li>
  )
}

export default CategoryTitle

export const Wrapper = (theme: Theme, currentPage: string, link: string) => css`
  margin-top: 0.8rem;
  list-style-type: none;

  .title {
    font-size: 1.1rem;
    text-decoration: none;
    color: ${currentPage === link ? theme.hoverEvent : theme.fontColor};
    font-weight: ${currentPage === link ? "1000" : null};

    &:hover {
      color: ${theme.hoverEvent};
      font-weight: bold;
    }
  }
`
