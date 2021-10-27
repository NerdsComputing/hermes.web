import { combineReducers } from '@reduxjs/toolkit'

import { detections } from 'detections/slices'
import { cameras } from 'cameras/slices'

export const rootReducer = combineReducers({ detections, cameras })
