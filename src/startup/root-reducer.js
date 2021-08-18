import { combineReducers } from '@reduxjs/toolkit'

import { detections } from 'detections/slices'
import { cameras } from 'cameras/slices'
import { detection } from 'detection/slices'

export const rootReducer = combineReducers({ detections, cameras, detection })
