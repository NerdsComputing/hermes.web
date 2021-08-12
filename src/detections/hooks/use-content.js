import { BarChart } from 'detections/chart/bar'
import { Error } from 'detections/chart/error'
import { Loading } from 'detections/chart/loading'

export const useContent = () => ({
  success: BarChart,
  failure: Error,
  loading: Loading,
})
