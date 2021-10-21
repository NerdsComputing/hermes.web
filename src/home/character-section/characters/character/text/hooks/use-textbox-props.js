import { usePickProperLeftStyle }
  from 'home/character-section/characters/character/text/hooks/use-pick-proper-left-style'
import { usePickProperRightStyle }
  from 'home/character-section/characters/character/text/hooks/use-pick-proper-right-style'

export const useTextboxProps = position => {
  const pickProperLeftStyle = usePickProperLeftStyle()
  const pickProperRightStyle = usePickProperRightStyle()

  return position === 'left' ? pickProperLeftStyle : pickProperRightStyle
}
