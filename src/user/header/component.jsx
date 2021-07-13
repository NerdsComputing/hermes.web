import React from 'react'

import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useStyle } from 'user/style'

export const Components = ({ items }) => <Grid item xs={3}>
  <Paper className={useStyle().paper}>{items}</Paper>
</Grid>

Components.propTypes = { items: PropTypes.string.isRequired }
