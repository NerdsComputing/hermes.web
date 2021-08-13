import { useCallback } from 'react'

import { useContext } from 'detections/filters/context'

export const useAddFilterComponent = () => {
  const { setFilters } = useContext()

  return useCallback(() => {
    setFilters(prev => [...prev, { type: '' }])
  }, [setFilters])
}
