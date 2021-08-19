import { useSettings } from 'settings/hooks/use-settings'

export const useMapProps = () => ({
  defaultCenter: { lat: useSettings().google.map.latitude, lng: useSettings().google.map.longitude },
  defaultZoom: useSettings().google.map.zoom,
  bootstrapURLKeys: { key: useSettings().google.map.id },
})
