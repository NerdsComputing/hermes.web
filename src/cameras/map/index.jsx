import React from 'react'

import { useContext } from 'cameras/context'
import { Marker } from 'cameras/map/marker'
import { ShowMap } from 'cameras/map/show-map'

export const Map = () => {
  const { items } = useContext()

  return <ShowMap>
    {
      items.map((item, index) => <Marker item={item} key={index} lat={item.latitude} lng={item.longitude} />)
    }
  </ShowMap>
}
