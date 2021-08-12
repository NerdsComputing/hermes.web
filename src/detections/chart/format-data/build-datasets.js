import { randomColor } from 'detections/chart/format-data/random-color'

export const buildDatasets = ([key, value]) => ({
  label: key,
  data: value,
  backgroundColor: randomColor(),
})
