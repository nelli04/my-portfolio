import { NavLink } from 'react-router-dom'

import style from './menu.module.scss'

type Items = {
  title: string
  to: string
}

type MenuProps = {
  items: Items[]
}

export const Menu = ({ items }: MenuProps) => {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <ul className={style.navList}>
          {items.map((el, idx) => {
            return (
              <li className={style.listItem} key={idx}>
                <NavLink title={el.title} to={el.to}>
                  <span>{el.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
