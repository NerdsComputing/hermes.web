import { useItems } from 'cameras/map/hooks/use-item'

export const useCalculateLng = () => {
  const items = useItems()

  return items.reduce((total, { longitude }) => total + longitude, 0) / items.length
}
