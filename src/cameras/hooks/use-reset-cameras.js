import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'cameras/slices/get'

export const useResetCameras = () => {
  const dispatch = useDispatch()
  const { reset } = actions

  return useCallback(() => {
    dispatch(reset())
  }, [dispatch, reset])
}
