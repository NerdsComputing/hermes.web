import { useItems } from 'cameras/map/hooks/use-items'

export const useLatitude = () => {
  const items = useItems()

  return items.reduce((total, { latitude }) => total + latitude, 0) / items.length
}
