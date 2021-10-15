import { useCamerasStyle } from 'home/first-section/live/see-button/hooks/use-cameras-style'
import { useDetectionsStyle } from 'home/first-section/live/see-button/hooks/use-detections-style'

export const useButtonStyle = path => {
  console.log(path)
  const camerasStyle = useCamerasStyle()
  const detectionsStyle = useDetectionsStyle()

  return path === '/cameras' ? camerasStyle : detectionsStyle
}
