import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'detection/fetch/slices/get'
import { useParams } from 'react-router-dom'

export const useGetDetection = () => {
  const dispatch = useDispatch()
  const { attempt } = actions
  const { id } = useParams()

  useEffect(() => {
    dispatch(attempt({ pagination: { pageIndex: 0, pageSize: 1 }, id: parseInt(id) }))
  }, [dispatch, attempt, id])
}
