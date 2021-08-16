import { useContext } from 'detections/context'
import { useCallback } from 'react'

export const useChangeRowsPerPage = (callback, deps) => {
  const { setPageSize, setPageIndex } = useContext()

  return useCallback(event => {
    setPageSize(event.target.value)
    setPageIndex(0)
  }, [setPageSize, setPageIndex])
}
