import { ButtonContacts } from '@/components/button-contacts/button-contacts'
import { useFooter } from '@/hooks/use-footer/use-footer'

import style from './footer.module.scss'

import { SocialContact } from './social-contact/social-contact'

export const Footer = () => {
  const { footer } = useFooter()

  return (
    <footer className={style.container}>
      <span className={style.slogan}>
        <ButtonContacts />
      </span>
      <div className={style.socialContactWrapper}>
        {footer.map((el, idx) => {
          return (
            <SocialContact
              contacts={el.myNameSocial}
              href={el.href}
              icon={el.icon}
              key={idx}
              nameSocial={el.title}
            />
          )
        })}
      </div>
      <small className={style.copyright}>©2023 Nelly Ivanova, All Rights Reserved.</small>
    </footer>
  )
}
