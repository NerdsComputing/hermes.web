import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => <Grid container justify={'center'}>
  <Grid item xs={12} sm={12} md={10} lg={10}>
    {children}
  </Grid>
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
