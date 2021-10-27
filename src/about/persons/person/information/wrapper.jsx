import React from 'react'
import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/persons/person/information/style'

export const Wrapper = ({ children }) => <Box classes={useStyles()}>
  <Grid container spacing={2} style={{ margin: '10px 10% 10px 10%' }}>
    {children}
  </Grid>
</Box>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
