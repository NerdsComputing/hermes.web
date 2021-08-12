import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'cameras/slices/get'

export const useFetchCameras = () => {
  const dispatch = useDispatch()
  const { attempt } = actions

  return useEffect(() => {
    dispatch(attempt({ pagination: { pageSize: 10, pageIndex: 0 } }))
  }, [dispatch, attempt])
}
