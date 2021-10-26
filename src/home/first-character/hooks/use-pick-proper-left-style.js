import { useStyleCase } from 'home/first-character/hooks/use-style-case'
import { useProperLeftStyle } from 'home/first-character/hooks/use-proper-left-style'

export const usePickProperLeftStyle = () => {
  const styleCase = useStyleCase().true || 'phone'

  return useProperLeftStyle()[styleCase]
}
