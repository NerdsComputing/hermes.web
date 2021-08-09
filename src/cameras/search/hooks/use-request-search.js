import { useCallback } from 'react'

import { useContext } from 'cameras/context'
import { useFilter } from 'cameras/search/hooks/use-filter'

export const useRequestSearch = () => {
  const { setRows } = useContext()
  const fetch = useFilter()

  return useCallback(search => {
    const items = fetch(search)
    setRows(items)
  }, [fetch, setRows])
}
