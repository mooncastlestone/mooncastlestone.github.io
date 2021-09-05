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
    <div css={Wrapper(theme)}>
      <Link className="title" to={link}>
        {children}
      </Link>
    </div>
  )
}

export default CategoryTitle

export const Wrapper = (theme: Theme) => css`
  margin-top: 0.8rem;

  .title {
    font-size: 1.2rem;
    text-decoration: none;
    font-family: "Athiti";
    color: ${theme.fontColor};

    @media (max-width: 375px) {
      font-size: 1.8rem;
    }

    &:hover {
      color: #607d8b;
      font-weight: bolder;
    }
  }
`
