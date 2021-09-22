import { useDisplayCase } from 'cameras/map/hooks/use-display-case'
import { useContent } from 'cameras/map/hooks/use-content'

export const usePickContent = () => {
  const displayCase = useDisplayCase().true || 'loading'

  return useContent()[displayCase]
}
