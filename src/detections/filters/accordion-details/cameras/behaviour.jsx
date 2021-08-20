import { useUpdateCameraList } from 'detections/filters/accordion-details/cameras/use-update-camera-list'
import { useCreateCameraList } from 'detections/filters/accordion-details/cameras/use-create-camera-list'

export const Behaviour = () => {
  useUpdateCameraList()
  useCreateCameraList()

  return ''
}
