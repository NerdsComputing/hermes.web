import { useLocation } from 'react-router-dom'
import { useValidation } from 'detections/hooks/use-validation'

export const useCameraFilter = () => {
  const link = useLocation()
  const alias = useValidation()

  return link.search && alias === 'cameraId' ? [link.search.split('=')[1].split('&')[0]] : [null]
}
