import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const ItemWrapper = ({ children }) => <Grid item xs={12}>
  {children}
</Grid>

ItemWrapper.propTypes = { children: PropTypes.node.isRequired }
