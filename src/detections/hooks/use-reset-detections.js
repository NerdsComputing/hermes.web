import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/slices/get'

export const useResetDetections = () => {
  const dispatch = useDispatch()
  const { reset } = actions

  return useCallback(() => {
    dispatch(reset())
  }, [dispatch, reset])
}
