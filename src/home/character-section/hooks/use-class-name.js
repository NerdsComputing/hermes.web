import { useStyles } from 'home/character-section/styles'

export const useClassName = position => {
  const style = useStyles()

  return ({ className: position === 'left' ? style.left : style.right })
}
