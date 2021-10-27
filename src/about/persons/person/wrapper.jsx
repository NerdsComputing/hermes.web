import React from 'react'
import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/persons/person/style'

export const Wrapper = ({ children }) => <Grid item xs={12} md={12} lg={6}>
  <Box classes={useStyles()}>
    {children}
  </Box>
</Grid>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
