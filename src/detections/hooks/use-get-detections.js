import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/fetch/slices/get'
import { useContext } from 'detections/context'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const { pageIndex, pageSize } = useContext()

  return useCallback(() => {
    dispatch(attempt({ pagination: { pageIndex, pageSize } }))
  }, [dispatch, pageIndex, pageSize])
}
