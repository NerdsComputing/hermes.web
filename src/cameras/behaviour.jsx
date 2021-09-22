import { useFetchCameras } from 'cameras/hooks/use-fetch-cameras'
import { useInitItems } from 'cameras/map/hooks/use-init-items'

export const Behaviour = () => {
  useFetchCameras()
  useInitItems()

  return ''
}
