import { useLeftStyle } from 'home/character-section/hooks/use-left-style'
import { useRightStyle } from 'home/character-section/hooks/use-right-style'

export const useTextboxProps = position => {
  const left = useLeftStyle()
  const right = useRightStyle()

  return ({ classes: position === 'left' ? left : right })
}
