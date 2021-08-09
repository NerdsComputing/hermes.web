import { useCallback } from 'react'

import { useContext } from 'cameras/context'
import { useRequestSearch } from 'cameras/search/hooks/use-request-search'

export const useCancelSearch = () => {
  const { setSearchPhrase, searchPhrase } = useContext()
  const change = useRequestSearch()

  return useCallback(() => {
    setSearchPhrase('')
    change(searchPhrase)
  }, [searchPhrase, change, setSearchPhrase])
}
