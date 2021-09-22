import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Item } from 'cameras/map/marker/item-props'

export const Latitude = ({ item }) => <Box>
  <Typography variant={'h10'} align={'center'}>
    {`Latitude: ${item.latitude}`}
  </Typography>
</Box>

Latitude.propTypes = { item: PropTypes.objectOf(Item).isRequired }
