import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { Grid } from '@material-ui/core'

import { useStyles } from 'cameras/map/style'
import { useMapProps } from 'cameras/map/hooks/use-map-props'

export const ShowMap = ({ children }) => <Grid container className={useStyles().grid}>
  <GoogleMapReact {...useMapProps()}>
    {children}
  </GoogleMapReact>
</Grid>

ShowMap.propTypes = { children: PropTypes.array.isRequired }
