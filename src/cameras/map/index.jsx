import React from 'react'
import { Grid } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

import { useStyles } from 'cameras/map/style'
import { useItems } from 'cameras/list/items/hooks/use-item'
import { Marker } from 'cameras/map/marker'
import { useMapProps } from 'cameras/map/hooks/use-map-props'

export const Map = () => <Grid container className={useStyles().grid}>
  <GoogleMapReact {...useMapProps()}>
    {useItems().map((item, index) => <Marker item={item} key={index} lat={item.latitude} lng={item.longitude} />)}
  </GoogleMapReact>
</Grid>
