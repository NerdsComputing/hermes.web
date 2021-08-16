import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: null,
  data: null,
  errors: null,
  reset: null,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, errors: payload })

const reset = (state, { payload }) => ({ ...state, reset: payload, data: null })

export const get = createSlice({
  initialState,
  name: 'getDetections',
  reducers: {
    attempt,
    success,
    failure,
    reset,
  },
})

export const { actions } = get
