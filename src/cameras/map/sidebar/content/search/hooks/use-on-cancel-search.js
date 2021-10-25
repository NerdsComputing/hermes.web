import { useCallback } from 'react'

import { useContext } from 'cameras/context'

export const useOnCancelSearch = () => {
  const { setSearchPhrase } = useContext()

  return useCallback(() => setSearchPhrase(null), [setSearchPhrase])
}
