import { useCallback } from 'react'

import { useContext } from 'cameras/context'
import { closePins } from 'cameras/map/hooks/close-pins'

export const useOnClick = () => {
  const { setItems } = useContext()

  return useCallback(() => {
    setItems(closePins())
  }, [setItems])
}
