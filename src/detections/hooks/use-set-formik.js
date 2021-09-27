import { validation } from 'detections/validation'
import { useHandleSubmit } from 'detections/hooks/use-handle-submit'

const initialValues = {
  class: '',
  timestamp: {
    greaterEqualThan: '2021-01-01T00:00:00',
    lesserEqualThan: '2021-09-01T00:00:00',
  },
  score: {
    greaterEqualThan: 0,
    lesserEqualThan: 100,
  },
  cameraIds: [],
}

export const useSetFormik = (pageSize, pageIndex) => ({
  initialValues,
  onSubmit: useHandleSubmit(pageSize, pageIndex),
  validationSchema: validation,
})
