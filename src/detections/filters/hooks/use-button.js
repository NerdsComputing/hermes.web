import { useCallback } from 'react'

import { useContext } from 'detections/filters/context'

export const useButton = () => {
  const { setOpen } = useContext()

  return useCallback(() => {
    setOpen(true)
  }, [setOpen])
}
