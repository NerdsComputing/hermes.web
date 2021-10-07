import { useCallback } from 'react'

import { useDetections } from 'cameras/map/hooks/use-detections'

export const useDetectionsCount = () => {
  const detections = useDetections()

  return useCallback(camera => detections.filter(detection => detection.camera.id === camera.id).length, [detections])
}
