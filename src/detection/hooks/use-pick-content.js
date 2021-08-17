import { useDisplayCase } from 'detection/hooks/use-display-case'
import { useContent } from 'detection/hooks/use-content'

export const usePickContent = () => {
  const displayCase = useDisplayCase().true || 'loading'

  return useContent()[displayCase]
}
