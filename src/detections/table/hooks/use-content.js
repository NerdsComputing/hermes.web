import { TableDetections } from 'detections/table/table-detections'
import { Error } from 'detections/table/error'
import { Loading } from 'detections/table/loading'

export const useContent = () => ({
  success: TableDetections,
  failure: Error,
  loading: Loading,
})
