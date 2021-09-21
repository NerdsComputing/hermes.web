import { useCallback } from 'react'

import { useContext } from 'cameras/context'
import { showItem } from 'cameras/map/show-item'

export const useShowMarker = () => {
  const { setItems } = useContext()

  return useCallback(key => {
    setItems(showItem(key))
  }, [setItems])
}
