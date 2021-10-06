import { useEffect } from 'react'

import { useContext } from 'cameras/context'
import { sortItems } from 'cameras/map/marker/sort-items'

export const useSortItems = () => {
  const { setItems } = useContext()

  useEffect(() => {
    setItems(sortItems)
  }, [setItems])
}
