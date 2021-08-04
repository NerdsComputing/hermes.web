import { combineEpics } from 'redux-observable'

import { cameras } from 'cameras/epics'

export const rootEpic = combineEpics(cameras)
