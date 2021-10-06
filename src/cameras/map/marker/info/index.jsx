import React from 'react'
import { Box, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Id } from 'cameras/map/marker/info/id'
import { Latitude } from 'cameras/map/marker/info/latitude'
import { Longitude } from 'cameras/map/marker/info/longitude'
import { useStyles } from 'cameras/map/style'
import { Item } from 'cameras/map/marker/item-props'
import { useNavigation } from 'detections/table/hooks/use-navigation'
import { TotalCounts } from 'cameras/map/marker/info/total-counts'

export const Info = ({ item }) => <Box className={useStyles().infoWindowStyle}>
  <Id item={item} />
  <Latitude item={item} />
  <Longitude item={item} />
  <TotalCounts item={item} />
  <Button onClick={useNavigation(`/detections?cameraId=${item.id}`)}> See more </Button>
</Box>

Info.propTypes = { item: PropTypes.objectOf(Item).isRequired }
