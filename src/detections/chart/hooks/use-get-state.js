import { useDisplayCase } from 'detections/hooks/use-display-case'
import { useContent } from 'detections/hooks/use-content'

export const useGetState = () => {
  const displayCase = useDisplayCase().true || 'loading'

  return useContent()[displayCase]
}
