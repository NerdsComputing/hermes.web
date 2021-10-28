import { combineEpics } from 'redux-observable'

import { get } from 'sounds/epics/get'

export const soundPrediction = combineEpics(get)
