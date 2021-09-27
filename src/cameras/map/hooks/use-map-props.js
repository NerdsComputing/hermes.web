import { useSettings } from 'settings/hooks/use-settings'
import { useShowMarker } from 'cameras/map/hooks/use-show-marker'
import { useLatitude } from 'cameras/map/hooks/use-latitude'
import { useLongitude } from 'cameras/map/hooks/use-longitude'
import { useZoom } from 'cameras/map/hooks/use-zoom'

export const useMapProps = () => ({
  defaultCenter: { lat: useLatitude(), lng: useLongitude() },
  defaultZoom: useZoom(),
  bootstrapURLKeys: { key: useSettings().google.map.id },
  onChildClick: useShowMarker(),
})
