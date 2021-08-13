import { useDisplayCase } from 'detections/filters/accordion-details/hooks/use-display-case'
import { useCamerasTemplate } from 'detections/filters/accordion-details/hooks/use-cameras-template'

export const usePickCamerasTemplate = () => {
  const displayCase = useDisplayCase().true || 'loading'

  return useCamerasTemplate()[displayCase]
}
