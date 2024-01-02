import { Link } from 'react-router-dom'

import { MdKeyboardArrowRight } from 'react-icons/md'

import style from './button-contacts.module.scss'

export const ButtonContacts = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>
        Did you like <span className={style.accentText}>THE</span>
      </p>
      <span className={style.accentText}> PROJECT?</span>
      <div className={style.linkWrapper}>
        <Link className={style.link} to={'/contacts'}>
          Let&apos;s Talk
          <MdKeyboardArrowRight className={style.icon} size={30} />
        </Link>
      </div>
    </div>
  )
}
