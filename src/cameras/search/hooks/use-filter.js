import { data } from 'cameras/list/data.json'
import { useCallback } from 'react'

export const useFilter = () => {
  const items = data.cameras.items.map(item => item.id)

  return useCallback(searchedVal => items.filter(row => row.toLowerCase()
    .includes(searchedVal.toLowerCase())), [items])
}
