import { Dispatch, SetStateAction, createContext } from 'react'

export const themes = {
  dark: 'dark',
  light: 'light',
}

type ThemeContextProps = {
  setTheme: Dispatch<SetStateAction<string>>
  theme: string
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
