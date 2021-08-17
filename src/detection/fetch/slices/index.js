import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'detection/fetch/slices/get'

export const detection = combineReducers({ get: get.reducer })
