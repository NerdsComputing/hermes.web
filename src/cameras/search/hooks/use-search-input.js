import { useCallback } from 'react'

import { useContext } from 'cameras/context'

export const useSearchInput = () => {
  const { setSearchPhrase, searchInput } = useContext()

  return useCallback(() => setSearchPhrase(searchInput), [setSearchPhrase, searchInput])
}
