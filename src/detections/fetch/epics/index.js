import { combineEpics } from 'redux-observable'

import { get } from 'detections/fetch/epics/get'

export const detections = combineEpics(get)
