import React, { useState, createContext } from "react"

type ThemeType = "light" | "dark"

type ThemeContext = [ThemeType, () => void]

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider = ({ children }: any) => {
  let initialState: ThemeType = "light"

  if (typeof window !== "undefined") {
    initialState =
      (window.localStorage.getItem("app_theme") as ThemeType) || "light"
  }

  const [themeMode, setThemeMode] = useState<ThemeType>(initialState)

  const onToggle = () => {
    const newTheme = themeMode === "light" ? "dark" : "light"
    window.localStorage.setItem("app_theme", newTheme)
    setThemeMode(newTheme)
  }

  return (
    <ThemeContext.Provider value={[themeMode, onToggle]}>
      {children}
    </ThemeContext.Provider>
  )
}
