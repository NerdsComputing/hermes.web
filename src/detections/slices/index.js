import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'detections/slices/get'

export const detections = combineReducers({ get: get.reducer })
