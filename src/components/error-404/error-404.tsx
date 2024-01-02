import { Link } from 'react-router-dom'

import cats from '@/assets/img/cat/cat.png'

import style from './error-404.module.scss'

export const Error404 = () => {
  return (
    <div className={style.container}>
      <div className={style.textWrapper}>
        <h2>404</h2>
        <p>
          We&apos;re sorry, the page you requested could not be found.
          <span>Please go back to the homepage.</span>
        </p>
        <div className={style.button}>
          <Link to={'/'}>go home</Link>
        </div>
      </div>
      <div>
        <img alt={'Error Image'} src={cats} />
      </div>
    </div>
  )
}
