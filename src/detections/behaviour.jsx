import { useGetDetections } from 'detections/hooks/use-get-detections'
import { useFetchCameras } from 'detections/hooks/use-fetch-cameras'

export const Behaviour = () => {
  useGetDetections()
  useFetchCameras()

  return ''
}
