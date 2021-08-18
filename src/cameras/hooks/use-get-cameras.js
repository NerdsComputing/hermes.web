import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'cameras/slices/get'
import { useContext } from 'cameras/context'

export const useGetCameras = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const { searchPhrase } = useContext()

  return useCallback(() => {
    dispatch(attempt({ pagination: { pageIndex: 0, pageSize: 10 }, ...searchPhrase && { ids: [searchPhrase] } }))
  }, [dispatch, attempt, searchPhrase])
}
