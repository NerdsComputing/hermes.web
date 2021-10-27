import { combineEpics } from 'redux-observable'

import { detections } from 'detections/epics'
import { cameras } from 'cameras/epics'

export const rootEpic = combineEpics(detections, cameras)
