import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Id = ({ item }) => <Box>
  <Typography variant={'h10'} align={'center'}>
    {`Id: ${item.id}`}
  </Typography>
</Box>

Id.propTypes = { item: PropTypes.string.isRequired }
