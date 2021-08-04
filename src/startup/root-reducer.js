import { combineReducers } from '@reduxjs/toolkit'
import { cameraReducer } from 'cameras/slices'

export const rootReducer = combineReducers({ cameraReducer })
