import { Tilt } from 'react-tilt'

import { Icon } from '@/components/common/icon/icon'

import style from './skill.module.scss'

type Props = {
  icon: string
  title: string
}

const defaultOptions = {
  axis: null,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  max: 35,
  perspective: 1000,
  reset: true,
  reverse: false,
  scale: 1.1,
  speed: 3000,
  transition: true,
}

export const Skill = ({ icon, title }: Props) => {
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <Tilt options={defaultOptions}>
          <Icon height={'110'} id={icon} viewBox={'0 0 120 120'} width={'110'} />
        </Tilt>
      </div>
      <h3>{title}</h3>
    </div>
  )
}
