import React, { useState, createContext } from "react"

type ThemeType = "light" | "dark"

type ThemeContext = [ThemeType, () => void]

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider = ({ children }: any) => {
  const initialState: ThemeType =
    (window.localStorage.getItem("app_theme") as ThemeType) || "light"
  const [theme, setTheme] = useState<ThemeType>(initialState)
  const onToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    window.localStorage.setItem("app_theme", newTheme)
    setTheme(newTheme)
  }
  return (
    <ThemeContext.Provider value={[theme, onToggle]}>
      {children}
    </ThemeContext.Provider>
  )
}
