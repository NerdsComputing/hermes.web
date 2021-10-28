import { combineReducers } from '@reduxjs/toolkit'

import { get } from 'sounds/slices/get'

export const soundPrediction = combineReducers({ get: get.reducer })
