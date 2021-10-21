import { useStyleCase } from 'home/character-section/characters/character/text/hooks/use-style-case'
import { useProperRightStyle } from 'home/character-section/characters/character/text/hooks/use-proper-right-style'

export const usePickProperRightStyle = () => {
  const styleCase = useStyleCase().true || 'phone'

  return useProperRightStyle()[styleCase]
}
