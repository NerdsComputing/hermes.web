import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

import { Item } from 'cameras/map/marker/item-props'

export const TotalCounts = ({ item }) => <Box>
  <Typography variant={'h10'} align={'center'}>
    {`Total counts: ${item.detections}`}
  </Typography>
</Box>

TotalCounts.propTypes = { item: PropTypes.objectOf(Item).isRequired }
