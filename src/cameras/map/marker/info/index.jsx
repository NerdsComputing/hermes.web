import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Coordinates } from 'cameras/map/marker/info/coordinates'
import { useStyles } from 'cameras/map/style'
import { Id } from 'cameras/map/marker/info/id'
import { Button } from 'cameras/map/marker/info/button'

export const Info = ({ item }) => <Box className={useStyles().infoWindowStyle}>
  <Id value={item.id} />
  <Coordinates coordinate={'Latitude'} value={item.latitude} />
  <Coordinates coordinate={'Longitude'} value={item.longitude} />
  <Button cameraId={item.id} />
</Box>

Info.propTypes = { item: PropTypes.object.isRequired }
