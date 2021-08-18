import { combineEpics } from 'redux-observable'

import { detections } from 'detections/fetch/epics'
import { cameras } from 'cameras/epics'
import { detection } from 'detection/fetch/epics'

export const rootEpic = combineEpics(detections, cameras, detection)
