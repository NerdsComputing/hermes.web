import { useDetections } from 'cameras/map/hooks/use-detections'
import { useCallback } from 'react'

export const useDetectionsCount = () => {
  const detections = useDetections()

  return useCallback(camera => detections.filter(detection => detection.camera.id === camera.id).length, [detections])
}
