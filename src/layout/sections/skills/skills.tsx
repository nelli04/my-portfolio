import { useSkills } from '@/hooks/use-skills/use-skills'
import { Skill } from '@/layout/sections/skills/skill/skill'

import style from './skills.module.scss'
import styleContainer from '@/styles/common/container.module.scss'

export const Skills = () => {
  const { skills } = useSkills()

  return (
    <section className={`${styleContainer.container} ${style.mainContainer}`}>
      <div className={style.skills}>
        {skills.map((el, idx) => {
          return <Skill icon={el.icon} key={idx} title={el.title} />
        })}
      </div>
    </section>
  )
}
