import { combineEpics } from 'redux-observable'

import { detections } from 'detections/epics'
import { cameras } from 'cameras/epics'
import { soundPrediction } from 'sounds/epics'

export const rootEpic = combineEpics(detections, cameras, soundPrediction)
