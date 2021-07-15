import React from 'react'
import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Alignment = ({ children }) => <Box maxHeight={'80vh'} overflow={'auto'}>
  <Grid container justify={'center'} alignContent={'center'} spacing={'5'}>
    { children }
  </Grid>
</Box>
Alignment.propTypes = { children: PropTypes.object.isRequired }
