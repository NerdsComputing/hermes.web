import { Input } from 'detections/filters/accordion-details/cameras/input'
import { Error } from 'detections/filters/accordion-details/cameras/error'
import { Loading } from 'detections/filters/accordion-details/cameras/loading'

export const useCamerasTemplate = () => ({
  success: Input,
  failure: Error,
  loading: Loading,
})
