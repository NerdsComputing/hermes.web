import { useCallback } from 'react'

import { useContext } from 'detections/filters/context'

const deleteFilter = index => filters => filters.filter((item, filterIndex) => filterIndex !== index)

export const useRemoveFilter = (index, type) => {
  const { setFilters, filterVariants, setFilterVariants } = useContext()

  return useCallback(() => {
    type !== '' && setFilterVariants([...filterVariants, type])
    setFilters(deleteFilter(index))
  }, [setFilters, index, filterVariants, setFilterVariants, type])
}
