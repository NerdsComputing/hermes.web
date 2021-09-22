import { useItems } from 'cameras/map/hooks/use-items'

export const useCalculateLat = () => {
  const items = useItems()

  return items.reduce((total, { latitude }) => total + latitude, 0) / items.length
}
