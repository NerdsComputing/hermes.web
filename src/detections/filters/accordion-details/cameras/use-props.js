import { useAddCamera } from 'detections/filters/accordion-details/cameras/use-add-camera'

export const useProps = (index, item) => ({
  name: `cameraIds[${index}]`,
  id: `cameraIds[${index}]`,
  onClick: useAddCamera(item),
})
