import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { isEmpty } from 'lodash'

import { actions } from 'detections/slices/get'

const formatScore = score => ({
  greaterEqualThan: score.greaterEqualThan / 100,
  lesserEqualThan: score.lesserEqualThan / 100,
})

const createValues = values => ({
  ...values,
  score: formatScore(values.score),
  cameraIds: isEmpty(values.cameraIds) ? null : values.cameraIds,
})

export const useHandleSubmit = (pageSize, pageIndex) => {
  const dispatch = useDispatch()
  const { attempt, reset } = actions

  return useCallback(values => {
    dispatch(attempt({ ...createValues(values), pagination: { pageSize, pageIndex } }))
    dispatch(reset({ ...createValues(values), pagination: { pageIndex, pageSize } }))
  }, [dispatch, attempt, reset, pageIndex, pageSize])
}
