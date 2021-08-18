import { useFetchCameras } from 'detections/hooks/use-fetch-cameras'
import { usePaginatedQuery } from 'detections/hooks/use-paginated-query'

export const Behaviour = () => {
  usePaginatedQuery()
  useFetchCameras()

  return ''
}
