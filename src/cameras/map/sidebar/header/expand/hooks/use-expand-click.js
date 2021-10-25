import { useCallback } from 'react'

import { useContext } from 'cameras/context'

export const useExpandClick = () => {
  const { isExpanded, setIsExpanded } = useContext()

  return useCallback(() => {
    setIsExpanded(!isExpanded)
  }, [isExpanded, setIsExpanded])
}
