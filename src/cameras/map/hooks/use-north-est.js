import { useContext } from 'cameras/context'

export const useNorthEst = () => ({
  ne: {
    lat: { ...useContext().items[0] }.latitude || 1,
    lng: { ...useContext().items[0] }.longitude || 1,
  },
})
