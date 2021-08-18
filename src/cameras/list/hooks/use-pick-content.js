import { useDisplayCase } from 'cameras/list/hooks/use-display-case'
import { useContent } from 'cameras/list/hooks/use-content'

export const usePickContent = () => {
  const displayCase = useDisplayCase().true || 'loading'

  return useContent()[displayCase]
}
