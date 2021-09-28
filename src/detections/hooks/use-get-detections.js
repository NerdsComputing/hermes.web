import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/slices/get'
import { useContext } from 'detections/context'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const { pageIndex, pageSize, cameraId } = useContext()

  return useCallback(() => {
    dispatch(attempt({ cameraIds: [cameraId], pagination: { pageIndex, pageSize } }))
  }, [dispatch, attempt, pageIndex, pageSize, cameraId])
}
