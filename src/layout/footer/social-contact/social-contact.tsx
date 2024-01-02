import { Link } from 'react-router-dom'

import { Icon } from '@/components/icon/icon'

import style from './social-contact.module.scss'
import styleContainer from '@/styles/common/container.module.scss'

type Props = {
  contacts: string
  href: string
  icon: string
  nameSocial: string
}

export const SocialContact = ({ contacts, href, icon, nameSocial }: Props) => {
  return (
    <div className={style.container}>
      <div className={`${styleContainer.container} ${style.socialBlock}`}>
        <Link className={style.link} to={href}>
          {nameSocial}
        </Link>
        <div className={style.iconWrapper}>
          <Icon className={style.icon} id={icon} viewBox={'0 0 30 30'} width={'30px'} />
        </div>
        <span className={style.myName}>{contacts}</span>
      </div>
    </div>
  )
}
