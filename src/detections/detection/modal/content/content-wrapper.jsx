import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const ContentWrapper = ({ children }) => <Grid item xs={12} style={{ display: 'flex', margin: '10px 0 10px 0' }}>
  <Grid container>
    {children}
  </Grid>
</Grid>

ContentWrapper.propTypes = { children: PropTypes.node.isRequired }
