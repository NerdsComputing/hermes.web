import { useStyleCase } from 'home/character-section/characters/character/text/hooks/use-style-case'
import { useProperLeftStyle } from 'home/character-section/characters/character/text/hooks/use-proper-left-style'

export const usePickProperLeftStyle = () => {
  const styleCase = useStyleCase().true || 'phone'

  return useProperLeftStyle()[styleCase]
}
