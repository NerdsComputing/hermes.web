import { useEffect } from 'react'

import { useContext } from 'cameras/context'
import { useItems } from 'cameras/map/hooks/use-items'
import { useDetectionsCount } from 'cameras/map/hooks/use-detections-count'

const initShow = camera => camera.show || false

export const useInitItems = () => {
  const { setItems } = useContext()
  const items = useItems()
  const count = useDetectionsCount()

  useEffect(() => {
    items.length && setItems(items.map(camera => ({ ...camera, show: initShow(camera), detections: count(camera) })))
  }, [setItems, items, count])
}
