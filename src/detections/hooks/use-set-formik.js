import { validation } from 'detections/validation'
import { useHandleSubmit } from 'detections/hooks/use-handle-submit'

const initialValues = {
  class: '',
  timestamp: {
    greaterEqualThan: '2021-06-23T08:30:52',
    lesserEqualThan: '2021-08-18T23:59:59',
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
