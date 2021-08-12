import { groupBy } from 'lodash'

import { modes } from 'detections/chart/format-data/modes'
import { pickLength } from 'detections/chart/format-data/pick-length'

const initial = {
  1: [],
  2: [],
  3: [],
  4: [],
}

export const countByMode = (detections, mode) => Object
  .entries({ ...initial, ...groupBy(detections, modes[mode]) })
  .map(pickLength)
