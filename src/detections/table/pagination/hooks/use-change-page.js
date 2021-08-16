import { useContext } from 'detections/context'
import { useCallback } from 'react'

export const useChangePage = () => {
  const { setPageIndex } = useContext()

  return useCallback((_, newPage) => {
    setPageIndex(newPage)
  }, [setPageIndex])
}
