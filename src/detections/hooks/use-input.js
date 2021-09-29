import { useContext } from 'detections/context'
import { useCameraFilter } from 'detections/hooks/use-camera-filter'

export const useInput = () => {
  const cameraId = useCameraFilter()
  const { pageIndex, pageSize } = useContext()

  return {
    cameraIds: cameraId,
    pagination: { pageIndex, pageSize },
  }
}
