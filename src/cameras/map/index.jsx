import React from 'react'
import { Grid } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

import { useSettings } from 'settings/hooks/use-settings'
import { useStyles } from 'cameras/map/style'
import { useItems } from 'cameras/list/items/hooks/use-item'
import { Marker } from 'cameras/map/marker'

export const Map = () => <Grid container className={useStyles().grid}>
  <GoogleMapReact defaultCenter={{
    lat: useSettings().google.mapProps.latitude,
    lng: useSettings().google.mapProps.longitude,
  }} defaultZoom={useSettings().google.mapProps.zoom} bootstrapURLKeys={{ key: useSettings().google.map }}>
    {useItems().map((item, index) => <Marker item={item} key={index} lat={item.latitude} lng={item.longitude} />)}
  </GoogleMapReact>
</Grid>
