import { randomColor } from 'detections/chart/random-color'

export const buildDatasets = ([key, value]) => ({
  label: key,
  data: value,
  backgroundColor: randomColor(),
})
