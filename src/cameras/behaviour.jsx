import { useFetchCameras } from 'cameras/hooks/use-fetch-cameras'
import { useAddShowField } from 'cameras/map/hooks/use-add-show-filed'

export const Behaviour = () => {
  useFetchCameras()
  useAddShowField()

  return ''
}
