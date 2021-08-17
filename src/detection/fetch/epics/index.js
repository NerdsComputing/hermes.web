import { combineEpics } from 'redux-observable'

import { get } from 'detection/fetch/epics/get'

export const detection = combineEpics(get)
