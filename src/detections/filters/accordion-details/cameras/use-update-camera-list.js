import { useContext as useDetectionsContext } from 'detections/context'
import { useContext as useFiltersContext } from 'detections/filters/context'
import { useEffect } from 'react'

const updateList = items => Object.entries(items)
  .map(([key, { checked }]) => checked && key)
  .filter(value => value)

export const useUpdateCameraList = () => {
  const { setFieldValue } = useDetectionsContext()
  const { cameraVariants } = useFiltersContext()

  return useEffect(() => {
    setFieldValue('cameraIds', updateList(cameraVariants))
  }, [setFieldValue, cameraVariants])
}
