import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/slices/get'
import { useInput } from 'cameras/hooks/use-input'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const input = JSON.stringify(useInput())

  return useCallback(() => {
    dispatch(actions.attempt(JSON.parse(input)))
  }, [dispatch, input])
}
