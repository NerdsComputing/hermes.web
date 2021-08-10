import { groupBy } from 'lodash'

import { modes } from 'detections/chart/modes'
import { pickLength } from 'detections/chart/pick-length'

const initial = {
  1: [],
  2: [],
  3: [],
  4: [],
}

export const countByMode = (detections, mode) => Object
  .entries({ ...initial, ...groupBy(detections, modes[mode]) })
  .map(pickLength)
