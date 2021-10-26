import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => <Grid container spacing={1}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
