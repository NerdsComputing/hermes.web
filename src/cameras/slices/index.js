import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'cameras/slices/get'

export const cameras = combineReducers({ get: get.reducer })
