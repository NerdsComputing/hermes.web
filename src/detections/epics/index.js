import { combineEpics } from 'redux-observable'

import { get } from 'detections/epics/get'

export const detections = combineEpics(get)
