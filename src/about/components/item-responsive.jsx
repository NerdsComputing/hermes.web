import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

export const ItemResponsive = ({ children }) => <Grid item xs={6} sm={6} md={6}>
  {children}
</Grid>

ItemResponsive.propTypes = { children: PropTypes.node.isRequired }
