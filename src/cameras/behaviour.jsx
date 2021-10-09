import { useFetchCameras } from 'cameras/hooks/use-fetch-cameras'
import { useInitItems } from 'cameras/map/hooks/use-init-items'
import { useFetchDetections } from 'cameras/hooks/use-fetch-detections'

export const Behaviour = () => {
  useFetchCameras()
  useFetchDetections()
  useInitItems()

  return ''
}
