import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'detection/slices/get'

export const detection = combineReducers({ get: get.reducer })
