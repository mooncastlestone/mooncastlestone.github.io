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
      <Link className="title" to={link} aria-label={`${link} 페이지로 이동`}>
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
    font-weight: ${currentPage === link ? "1000" : null};
    text-decoration: none;
    color: ${currentPage === link ? theme.hoverEvent : theme.fontColor};

    &:hover {
      font-weight: bold;
      color: ${theme.hoverEvent};
    }
  }
`
