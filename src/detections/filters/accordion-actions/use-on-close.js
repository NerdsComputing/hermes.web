import { useCallback } from 'react'

import { useContext } from 'detections/filters/context'

export const useOnClose = () => {
  const { setOpen } = useContext()

  return useCallback(() => {
    setOpen(false)
  }, [setOpen])
}
