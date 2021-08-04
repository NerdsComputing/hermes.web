import { useDispatch } from 'react-redux'
import { actions } from 'detections/fetch/slices/get'
import { useEffect } from 'react'

export const useGetDetections = () => {
  const dispatch = useDispatch()
  const { attempt } = actions

  return useEffect(() => {
    dispatch(attempt({ pagination: { pageSize: 5, pageIndex: 0 } }))
  }, [attempt, dispatch])
}
