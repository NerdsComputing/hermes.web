import { useDisplayCase } from 'detections/hooks/use-display-case'
import { useContent } from 'detections/hooks/use-content'

export const usePickContent = () => {
  const displayCase = useDisplayCase().true || 'loading'

  return useContent()[displayCase]
}
