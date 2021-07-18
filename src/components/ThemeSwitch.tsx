import * as React from "react"
import ReactSwitch from "react-switch"

interface ThemeSwitchProps {
  checked: boolean
  toggleSwitch: () => void
}

const ThemeSwitch = ({
  checked,
  toggleSwitch: toggleSwitch,
}: ThemeSwitchProps) => {
  return <ReactSwitch checked={checked} onChange={toggleSwitch} />
}

export default ThemeSwitch
