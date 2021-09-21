import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Latitude = ({ item }) => <Box>
  <Typography variant={'h10'} align={'center'}>
    {`Latitude: ${item.latitude}`}
  </Typography>
</Box>

Latitude.propTypes = { item: PropTypes.string.isRequired }
