import { SwitchTheme } from '@/components/switch-theme/switch-theme'
import { ThemeContext, themes } from '@/providers/theme/theme-context'

import style from './header.module.scss'

import { Menu } from './menu/menu'

export const Header = () => {
  const headerMenu = [
    { title: 'Home', to: '/' },
    { title: 'Project', to: '/projects' },
    { title: 'Skills', to: '/skills' },
    { title: 'Contact', to: '/contacts' },
  ]

  return (
    <header className={style.container}>
      <div className={style.headerBlock}>
        <div className={`${style.header}`}>
          <Menu items={headerMenu} />
          <ThemeContext.Consumer>
            {context =>
              context && (
                <SwitchTheme
                  onChange={() => {
                    if (context.theme === themes.light) {
                      context.setTheme(themes.dark)
                    }
                    if (context.theme === themes.dark) {
                      context.setTheme(themes.light)
                    }
                  }}
                  value={context.theme === themes.dark}
                />
              )
            }
          </ThemeContext.Consumer>
        </div>
      </div>
    </header>
  )
}
