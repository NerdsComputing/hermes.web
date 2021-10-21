import { useLeftStyle } from 'home/character-section/characters/character/image/left-style'
import { useRightStyle } from 'home/character-section/characters/character/image/right-style'

export const useStyle = position => {
  const leftStyle = useLeftStyle()
  const rightStyle = useRightStyle()

  return position === 'left' ? leftStyle : rightStyle
}
