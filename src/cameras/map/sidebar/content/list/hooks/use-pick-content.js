import { useDisplayCase } from 'cameras/map/sidebar/content/list/hooks/use-display-case'
import { useContent } from 'cameras/map/sidebar/content/list/hooks/use-content'

export const usePickContent = () => {
  const displayCase = useDisplayCase().true || 'loading'

  return useContent()[displayCase]
}
