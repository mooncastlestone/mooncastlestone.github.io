import React, { useContext} from "react"
import themeGroup, { Theme } from "../../theme/theme"
import { ThemeContext } from "../../theme/ThemeContext"
import { Container } from "./Nav.style"

type NavProps = {
  isClosed: Boolean
}

const Nav = ({ isClosed }: NavProps) => {
  const [themeMode, onToggle] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return <div css={Container({ theme, isClosed })}></div>
}

export default Nav
