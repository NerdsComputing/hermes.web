import { useLocation } from 'react-router-dom'

import { useIndex } from 'detections/hooks/use-index'

export const useCameraFilter = () => {
  const link = useLocation()
  const cameraId = useIndex()
  const keys = link.search.split(/[?,&,=]/)

  return link.search && cameraId > 0 ? [keys[cameraId + 1]] : [null]
}
