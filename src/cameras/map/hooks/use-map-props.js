import { useSettings } from 'settings/hooks/use-settings'

export const useMapProps = () => ({
  defaultCenter: { lat: useSettings().google.mapProps.latitude, lng: useSettings().google.mapProps.longitude },
  defaultZoom: useSettings().google.mapProps.zoom,
  bootstrapURLKeys: { key: useSettings().google.map },
})
