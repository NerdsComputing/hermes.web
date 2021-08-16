/* eslint-disable */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/fetch/slices/get'
import { useContext } from 'detections/context'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const { attempt, reset } = actions
  const { pageIndex, pageSize } = useContext()

  useEffect(() => {
    dispatch(attempt({ pagination: { pageIndex, pageSize } }))
    dispatch(reset({ pagination: { pageIndex, pageSize } }))
  }, [dispatch, attempt, pageIndex, pageSize, reset])
}
/* eslint-disable */
