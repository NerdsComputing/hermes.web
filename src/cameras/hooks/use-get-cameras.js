import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'cameras/slices/get'

export const useGetCameras = () => {
  const dispatch = useDispatch()
  const { attempt } = actions

  useEffect(() => {
    dispatch(attempt({ pagination: { pageSize: 5, pageIndex: 0 } }))
  }, [dispatch, attempt])
}
