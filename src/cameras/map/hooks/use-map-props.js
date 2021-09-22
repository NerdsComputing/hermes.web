import { useSettings } from 'settings/hooks/use-settings'
import { useCalculateLat } from 'cameras/map/hooks/use-calculate-lat'
import { useCalculateLng } from 'cameras/map/hooks/use-calculate-lng'
import { useShowMarker } from 'cameras/map/hooks/use-show-marker'

export const useMapProps = () => ({
  defaultCenter: { lat: useCalculateLat(), lng: useCalculateLng() },
  defaultZoom: useSettings().google.map.zoom,
  bootstrapURLKeys: { key: useSettings().google.map.id },
  onChildClick: useShowMarker(),
})
