import { useCallback } from 'react'

import { useContext } from 'detections/context'

export const useRemoveFilterValue = () => {
  const { setFieldValue, initialValues } = useContext()

  return useCallback(type => {
    setFieldValue(type, initialValues[type])
  }, [setFieldValue, initialValues])
}
