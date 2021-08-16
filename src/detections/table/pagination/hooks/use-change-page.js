import { useCallback } from 'react'

import { useContext } from 'detections/context'

export const useChangePage = () => {
  const { setPageIndex } = useContext()

  return useCallback((_, newPage) => {
    setPageIndex(newPage)
  }, [setPageIndex])
}
