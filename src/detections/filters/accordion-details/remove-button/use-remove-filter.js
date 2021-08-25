import { useCallback } from 'react'

import { useContext } from 'detections/filters/context'

const deleteFilter = index => filters => filters.filter((item, filterIndex) => filterIndex !== index)

export const useRemoveFilter = () => {
  const { setFilters, filterVariants, setFilterVariants } = useContext()

  return useCallback((index, type) => {
    type !== '' && setFilterVariants([...filterVariants, type])
    setFilters(deleteFilter(index))
  }, [setFilters, filterVariants, setFilterVariants, deleteFilter])
}
