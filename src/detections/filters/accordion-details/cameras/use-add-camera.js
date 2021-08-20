import { useCallback } from 'react'

import { useContext } from 'detections/filters/context'

export const useAddCamera = item => {
  const { setCameraVariants, cameraVariants } = useContext()

  return useCallback(() => {
    const isChecked = cameraVariants[item].checked
    setCameraVariants({ ...cameraVariants, [item]: { checked: !isChecked } })
  }, [setCameraVariants, item, cameraVariants])
}
