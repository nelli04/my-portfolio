import iconsSprite from '@/assets/sprite/sprite.svg'

type IconProps = {
  className?: string
  height?: string
  id: string
  viewBox?: string
  width?: string
}

export const Icon = ({ className, height, id, viewBox, width }: IconProps) => {
  return (
    <svg
      className={className}
      fill={'none'}
      height={height || '100%'}
      viewBox={viewBox || '0 0 100 100'}
      width={width || '100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${id}`}></use>
    </svg>
  )
}
