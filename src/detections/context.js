import React, { useContext as useReactContext, useState } from 'react'
import { useFormik } from 'formik'

import { useSetFormik } from 'detections/hooks/use-set-formik'
import { useSplit } from 'detections/hooks/use-split'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const cameraId = useSplit()
  const [pageSize, setPageSize] = useState(10)
  const [pageIndex, setPageIndex] = useState(0)
  const formik = useFormik(useSetFormik(pageSize, pageIndex))

  return { pageIndex, setPageIndex, pageSize, setPageSize, ...formik, cameraId }
}
