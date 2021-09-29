import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/slices/get'
import { useInput } from 'detections/hooks/use-input'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const input = useInput()

  return useCallback(() => dispatch(attempt(input)), [dispatch, attempt, input])
}
