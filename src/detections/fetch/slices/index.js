import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'detections/fetch/slices/get'

export const detections = combineReducers({ get: get.reducer })
