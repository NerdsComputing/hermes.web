import { useSortItems } from 'cameras/map/hooks/use-sort-items'
import { mapSize } from 'cameras/map/map-size'
import { fitBounds } from 'google-map-react'
import { useBounds } from 'cameras/map/hooks/use-bounds'

export const useZoom = () => {
  useSortItems()

  const bounds = useBounds()
  const { zoom } = fitBounds(bounds, mapSize)

  return zoom
}

