import React from 'react'
import { Grid } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

import { Marker } from 'cameras/map/marker'
import { useSettings } from 'settings/hooks/use-settings'

export const Map = () => <Grid container style={{ height: '80vh', width: '100%' }}>
  <GoogleMapReact defaultCenter={{ lat: 45.79, lng: 24.13 }} defaultZoom={15}
                  bootstrapURLKeys={{ key: useSettings().google.map }}>
    <Marker lat={45.793128} lng={24.131900} text={'1'} />
    <Marker lat={45.793130} lng={24.132900} text={'2'} />
    <Marker lat={45.793140} lng={24.129900} text={'3'} />
  </GoogleMapReact>
</Grid>
