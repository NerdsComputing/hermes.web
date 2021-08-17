import { combineReducers } from '@reduxjs/toolkit'

import { detections } from 'detections/fetch/slices'
import { cameras } from 'cameras/slices'
import { detection } from 'detection/fetch/slices'

export const rootReducer = combineReducers({ detections, cameras, detection })
