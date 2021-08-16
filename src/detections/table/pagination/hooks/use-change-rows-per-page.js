import { useCallback } from 'react'

import { useContext } from 'detections/context'

export const useChangeRowsPerPage = (callback, deps) => {
  const { setPageSize, setPageIndex } = useContext()

  return useCallback(event => {
    setPageSize(event.target.value)
    setPageIndex(0)
  }, [setPageSize, setPageIndex])
}
