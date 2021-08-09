import { combineEpics } from 'redux-observable'

import { get } from 'cameras/epics/get'

export const cameras = combineEpics(get)
