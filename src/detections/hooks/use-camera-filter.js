import { useLocation } from 'react-router-dom'

import { useIndex } from 'detections/hooks/use-index'

export const useCameraFilter = () => {
  const link = useLocation()
  const index = useIndex()
  const keys = link.search.split(/[?,&,=]/)
  const cameraId = keys[index + 1].replace('%20', ' ')

  return link.search && index > 0 ? [cameraId] : [null]
}
