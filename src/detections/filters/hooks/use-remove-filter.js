import { useCallback } from 'react'
import { useContext } from 'detections/filters/context'

const deleteFilter = index => filters => filters.filter((item, filterIndex) => filterIndex !== index)

export const useRemoveFilter = (index, type) => {
  const { setFilters, selectItems, setSelectItems } = useContext()

  return useCallback(() => {
    type !== 'filter' && setSelectItems([...selectItems, type])
    setFilters(deleteFilter(index))
  }, [setFilters, index, selectItems, setSelectItems, type])
}
