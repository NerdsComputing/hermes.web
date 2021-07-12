import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

export const HalfRowItem = ({ children }) => <Grid item xs={6} sm={6} md={6}>
  {children}
</Grid>

HalfRowItem.propTypes = { children: PropTypes.node.isRequired }
