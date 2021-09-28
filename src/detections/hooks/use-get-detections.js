import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/slices/get'
import { useParameters } from 'detections/hooks/use-parameters'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const dataFetch = { ...useParameters() }

  return useCallback(() => dispatch(attempt(dataFetch)), [dispatch, attempt, dataFetch])
}
