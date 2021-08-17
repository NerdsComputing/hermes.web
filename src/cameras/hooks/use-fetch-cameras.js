import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from 'cameras/slices/get'
import { useContext } from 'cameras/context'

export const useFetchCameras = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const { searchPhrase } = useContext()

  useEffect(() => {
    dispatch(attempt({ pagination: { pageIndex: 0, pageSize: 10 }, ...searchPhrase && { ids: [searchPhrase] } }))
  }, [dispatch, attempt, searchPhrase])
}

