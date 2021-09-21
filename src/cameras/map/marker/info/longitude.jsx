import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

export const Longitude = ({ item }) => <Box>
  <Typography variant={'h10'} align={'center'}>
    {`Longitude: ${item.longitude}`}
  </Typography>
</Box>

Longitude.propTypes = { item: PropTypes.string.isRequired }
