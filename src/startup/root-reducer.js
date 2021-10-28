import { combineReducers } from '@reduxjs/toolkit'

import { detections } from 'detections/slices'
import { cameras } from 'cameras/slices'
import { soundPrediction } from 'sounds/slices'

export const rootReducer = combineReducers({ detections, cameras, soundPrediction })
