import { useItems } from 'cameras/list/items/hooks/use-item'

export const useCalculateLat = () => {
  const items = useItems()

  return items.reduce((total, { latitude }) => total + latitude, 0) / items.length
}
