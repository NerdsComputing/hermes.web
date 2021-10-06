import { useEffect } from 'react'

import { useContext } from 'cameras/context'
import { useItems } from 'cameras/map/hooks/use-items'
import { useDetectionsCount } from 'cameras/map/hooks/use-detections-count'

export const useInitItems = () => {
  const { setItems } = useContext()
  const items = useItems()
  const numb = useDetectionsCount()

  useEffect(() => {
    items.length && setItems(items.map(camera => ({ ...camera, show: camera.show || false, detections: numb(camera) })))
  }, [setItems, items, numb])
}
