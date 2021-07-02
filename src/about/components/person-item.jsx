import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

export const PersonItem = ({ children }) => <Grid item xs={12} sm={12} md={10} lg={7}>
  {children}
</Grid>

PersonItem.propTypes = { children: PropTypes.node.isRequired }
