import { useItems } from 'cameras/map/hooks/use-items'

export const useLongitude = () => {
  const items = useItems()

  return items.reduce((total, { longitude }) => total + longitude, 0) / items.length
}
