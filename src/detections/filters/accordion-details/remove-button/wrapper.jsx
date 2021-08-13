import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => <Grid item xs={1} sm={1} md={1}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
