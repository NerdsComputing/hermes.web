import { buildDatasets } from 'detections/chart/format-data/build-datasets'
import { byMode } from 'detections/chart/format-data/by-mode'

export const formatData = (items, mode) => byMode(items, mode).map(buildDatasets)
