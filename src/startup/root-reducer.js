import { combineReducers } from '@reduxjs/toolkit'

import { detections } from 'detections/fetch/slices'
import { cameras } from 'cameras/slices'

export const rootReducer = combineReducers({ detections , cameras})
