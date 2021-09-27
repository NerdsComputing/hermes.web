import { useNorthEst } from 'cameras/map/hooks/use-north-est'
import { useSouthWest } from 'cameras/map/hooks/use-south-west'

export const useBounds = () => ({
  ...useNorthEst(),
  ...useSouthWest(),
})
