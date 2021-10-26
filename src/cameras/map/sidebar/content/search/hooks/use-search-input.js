import { useCallback } from 'react'

import { useContext } from 'cameras/context'

export const useSearchInput = () => {
  const { setSearchPhrase, searchInput, setIsExpanded } = useContext()

  return useCallback(() => {
    setSearchPhrase(searchInput)
    setIsExpanded(false)
  }, [setSearchPhrase, searchInput, setIsExpanded])
}
