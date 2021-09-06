import React, { useContext } from "react"
import { Link } from "gatsby"
import THEME, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { css } from "@emotion/react"

type CategoryTitleProps = {
  link: string
  children: string
  currentPage: string
}

function CategoryTitle({ link, children, currentPage }: CategoryTitleProps) {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = THEME[themeMode]
  return (
    <div css={Wrapper(theme, currentPage, link)}>
      <Link className="title" to={link}>
        {children}
      </Link>
    </div>
  )
}

export default CategoryTitle

export const Wrapper = (theme: Theme, currentPage: string, link: string) => css`
  margin-top: 0.8rem;

  .title {
    font-size: 1.2rem;
    text-decoration: none;
    font-family: "Athiti";
    color: ${currentPage === link ? theme.hoverEvent : theme.fontColor};
    font-weight: ${currentPage === link ? "1000" : null};

    &:hover {
      color: ${theme.hoverEvent};
      font-weight: bolder;
    }
  }
`
