import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'cameras/slices/get'

export const cameraReducer = combineReducers({ get: get.reducer })
