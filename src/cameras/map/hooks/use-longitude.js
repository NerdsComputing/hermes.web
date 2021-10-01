import { useItems } from 'cameras/map/hooks/use-items'

export const useLongitude = () => {
  const items = useItems()

  return items.length ? items.reduce((total, { longitude }) => total + longitude, 0) / items.length : 1
}
