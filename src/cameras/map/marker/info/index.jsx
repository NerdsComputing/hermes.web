import React from 'react'
import { Box, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Id } from 'cameras/map/marker/info/id'
import { Latitude } from 'cameras/map/marker/info/latitude'
import { Longitude } from 'cameras/map/marker/info/longitude'
import { useStyles } from 'cameras/map/style'
import { Item } from 'cameras/map/marker/item-props'

export const Info = ({ item }) => <Box className={useStyles().infoWindowStyle}>
  <Id item={item} />
  <Latitude item={item} />
  <Longitude item={item} />
  <Button> See more </Button>
</Box>

Info.propTypes = { item: PropTypes.objectOf(Item).isRequired }
