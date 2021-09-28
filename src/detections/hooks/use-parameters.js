import { useContext } from 'detections/context'
import { useCameraFilter } from 'detections/hooks/use-camera-filterjs'

export const useParameters = () => {
  const cameraId = useCameraFilter()
  const { pageIndex, pageSize } = useContext()

  return ({
    cameraIds: cameraId,
    pagination: { pageIndex, pageSize },
  })
}
