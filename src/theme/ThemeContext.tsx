import React, { useState, createContext, useEffect } from "react"

type ThemeType = "light" | "dark"

type ThemeContext = [ThemeType, () => void]

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true)

  let initialState: ThemeType = "light"

  const [themeMode, setThemeMode] = useState<ThemeType>(initialState)

  const onToggle = () => {
    const newTheme = themeMode === "light" ? "dark" : "light"
    window.localStorage.setItem("app_theme", newTheme)
    setThemeMode(newTheme)
  }

  useEffect(() => {
    initialState =
    (window.localStorage.getItem("app_theme") as ThemeType) || "light"
    setLoading(false)
    setThemeMode(initialState)
  },[])

  return (
    <>
      {loading ? null : (
        <ThemeContext.Provider value={[themeMode, onToggle]}>
          {children}
        </ThemeContext.Provider>
      )}
    </>
  )
}
