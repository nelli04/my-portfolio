import { useState } from 'react'

import { Sun } from '@/assets/icons/sun/sun'
import { FaMoon } from 'react-icons/fa'

import style from './switch-theme.module.scss'

type Props = {
  onChange: () => void
  value: boolean
}

export const SwitchTheme = ({ onChange, value }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    onChange()
  }

  return (
    <div className={style.container}>
      <input
        checked={value}
        className={style.check}
        onChange={toggleTheme}
        readOnly
        type={'checkbox'}
      />
      <div className={style.sunAndMoon}>
        {!isDarkMode ? <Sun /> : <FaMoon className={style.moon} size={19} />}
      </div>
    </div>
  )
}
