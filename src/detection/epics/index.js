import { combineEpics } from 'redux-observable'

import { get } from 'detection/epics/get'

export const detection = combineEpics(get)
