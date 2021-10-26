import React from 'react'
import GoogleMapReact from 'google-map-react'

import { useContext } from 'cameras/context'
import { Marker } from 'cameras/map/marker'
import { useMapProps } from 'cameras/map/hooks/use-map-props'

export const ShowMap = () => {
  const { items } = useContext()

  return <GoogleMapReact {...useMapProps()}>
    {
      items.map((item, index) => <Marker item={item} key={index} lat={item.latitude} lng={item.longitude} />)
    }
  </GoogleMapReact>
}
