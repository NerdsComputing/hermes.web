import React from 'react'
import { Marker } from 'cameras/map/marker'
import { ShowMap } from 'cameras/map/show-map'
import { useContext } from 'cameras/context'

export const Content = () => {
  const { items } = useContext()

  return <ShowMap>
    {
      items.map((item, index) => <Marker item={item} key={index} lat={item.latitude} lng={item.longitude} />)
    }
  </ShowMap>
}
