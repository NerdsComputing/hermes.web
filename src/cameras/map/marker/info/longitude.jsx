import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Item } from 'cameras/map/marker/item-props'

export const Longitude = ({ item }) => <Box>
  <Typography variant={'h10'} align={'center'}>
    {`Longitude: ${item.longitude}`}
  </Typography>
</Box>

Longitude.propTypes = { item: PropTypes.objectOf(Item).isRequired }
