import { groupBy } from 'lodash'

import { countByMode } from 'detections/chart/format-data/count-by-mode'
import { byClass } from 'detections/chart/format-data/by-class'

export const byMode = (items, mode) => Object.entries(groupBy(items, byClass))
  .map(([itemClass, detections]) => [itemClass, countByMode(detections, mode)])
