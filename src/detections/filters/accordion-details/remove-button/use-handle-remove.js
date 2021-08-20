import { useCallback } from 'react'

import { useRemoveFilter } from 'detections/filters/accordion-details/remove-button/use-remove-filter'
import { useRemoveFilterValue } from 'detections/filters/accordion-details/remove-button/use-remove-filter-value'

export const useHandleRemove = (index, type) => {
  const removeFilter = useRemoveFilter()
  const removeFilterValue = useRemoveFilterValue()

  return useCallback(() => {
    removeFilter(index, type)
    removeFilterValue(type.toLowerCase())
  }, [removeFilter, removeFilterValue, index, type])
}
