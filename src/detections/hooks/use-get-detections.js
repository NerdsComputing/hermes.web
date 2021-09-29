import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/slices/get'
import { useParameters } from 'detections/hooks/use-parameters'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const input = useParameters()

  return useCallback(() => dispatch(attempt(input)), [dispatch, attempt, input])
}
