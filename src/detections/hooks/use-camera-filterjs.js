import { useLocation } from 'react-router-dom'
import { useIndex } from 'detections/hooks/use-index'

export const useCameraFilter = () => {
  const link = useLocation()
  const cameraId = useIndex()
  const splits = link.search.split(/[?,&,=]/)

  return link.search && cameraId > 0 ? [splits[cameraId + 1]] : [null]
}
