import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Item } from 'cameras/map/marker/item-props'

export const Id = ({ item }) => <Box>
  <Typography variant={'h10'} align={'center'}>
    {`Id: ${item.id}`}
  </Typography>
</Box>

Id.propTypes = { item: PropTypes.objectOf(Item).isRequired }
