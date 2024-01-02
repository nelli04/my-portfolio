import { Blob } from '@/assets/blob/blob'
import Typewriter from 'typewriter-effect'

import style from './main.module.scss'
import styleContainer from '@/styles/common/common.module.scss'

export const Main = () => {
  return (
    <section className={`${styleContainer.container} ${style.mainContainer}`}>
      <div className={style.greetings}>
        <span className={style.smallText}>Hi, i&apos;m</span>
        <span className={style.name}>Nelly Ivanova</span>
        <h2 className={style.mainTitle}>
          Frontend
          <Typewriter
            options={{
              autoStart: true,
              delay: 200,
              loop: true,
              strings: ['Developer.'],
              wrapperClassName: style.typewriter,
            }}
          />
        </h2>
      </div>
      <div className={style.photo}>
        <div className={style.blob}>
          <Blob />
        </div>
      </div>
    </section>
  )
}
