import { useCallback } from 'react'

import { useDetections } from 'cameras/map/hooks/use-detections'

const count = camera => detection => detection.camera.id === camera.id

export const useDetectionsCount = () => {
  const detections = JSON.stringify(useDetections())

  return useCallback(camera => JSON.parse(detections).filter(count(camera)).length, [detections])
}
