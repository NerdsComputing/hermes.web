import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: null,
  data: null,
  errors: null,
  loading: null,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload, loading: true })

const success = (state, { payload }) => ({ ...state, data: payload, loading: false })

const failure = (state, { payload }) => ({ ...state, errors: payload, loading: false })

export const get = createSlice({
  initialState,
  name: 'getCamerasSlice',
  reducers: {
    attempt,
    success,
    failure,
  },
})

export const { actions } = get
