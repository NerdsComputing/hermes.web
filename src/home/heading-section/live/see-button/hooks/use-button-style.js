import { useCamerasStyle } from 'home/heading-section/live/see-button/hooks/use-cameras-style'
import { useDetectionsStyle } from 'home/heading-section/live/see-button/hooks/use-detections-style'

export const useButtonStyle = path => {
  const camerasStyle = useCamerasStyle()
  const detectionsStyle = useDetectionsStyle()

  return path === '/cameras' ? camerasStyle : detectionsStyle
}
