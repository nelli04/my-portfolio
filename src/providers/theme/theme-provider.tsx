import React, { ReactNode, useState } from 'react'

import { ThemeContext, themes } from './theme-context'

const getTheme = () => {
  const storedTheme = `${window?.localStorage?.getItem('theme')}`

  if (Object.values(themes).includes(storedTheme)) {
    return storedTheme as string
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')

  return userMedia.matches ? themes.light : themes.dark
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getTheme)

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ setTheme, theme }}>{children}</ThemeContext.Provider>
}
