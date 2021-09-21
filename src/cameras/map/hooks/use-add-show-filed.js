import { useEffect } from 'react'

import { useContext } from 'cameras/context'
import { useItems } from 'cameras/map/hooks/use-items'

export const useAddShowField = () => {
  const { setItems } = useContext()
  const items = useItems()
  useEffect(() => {
    items.length && setItems(items.map(item => ({ ...item, show: false })))
  }, [setItems, items])
}
