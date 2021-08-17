import { useContext } from 'cameras/context'
import { useCallback } from 'react'

export const useSearchInput = () => {
  const { setSearchPhrase, searchInput } = useContext()

  return useCallback(() => {
    setSearchPhrase(searchInput)
  }, [setSearchPhrase, searchInput])
}
