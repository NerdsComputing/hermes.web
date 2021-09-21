import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { Grid } from '@material-ui/core'

import { useStyles } from 'cameras/map/style'
import { useMapProps } from 'cameras/map/hooks/use-map-props'
import { useShowMarker } from 'cameras/map/hooks/use-show-marker'

export const ShowMap = ({ children }) => <Grid container className={useStyles().grid}>
  <GoogleMapReact {...useMapProps()} onChildClick={useShowMarker()}>
    {children}
  </GoogleMapReact>
</Grid>

ShowMap.propTypes = { children: PropTypes.array.isRequired }
