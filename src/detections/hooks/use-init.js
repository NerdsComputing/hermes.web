import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detections/fetch/slices/get'

export const useInit = () => {
  const dispatch = useDispatch()
  const { attempt } = actions

  useEffect(() => {
    dispatch(attempt({ pagination: { pageIndex: 0, pageSize: 1000 } }))
  }, [dispatch, attempt])
}
