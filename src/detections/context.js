import React, { useContext as useReactContext, useState } from 'react'
import { useFormik } from 'formik'

import { useSetFormik } from 'detections/hooks/use-set-formik'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

const initialDetectionModal = {
  isOpen: false,
  score: 0,
  class: '',
  datetime: '',
  camera: '',
}

export const useDefaultContext = () => {
  const [pageSize, setPageSize] = useState(10)
  const [pageIndex, setPageIndex] = useState(0)
  const [detectionModal, setDetectionModal] = useState(initialDetectionModal)
  const formik = useFormik(useSetFormik(pageSize, pageIndex))

  return { pageIndex, setPageIndex, pageSize, setPageSize, detectionModal, setDetectionModal, ...formik }
}
