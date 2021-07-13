import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyle } from 'user/row/style'

export const Id = ({ id }) => <Grid item xs={3}>
  <Paper className={useStyle().paper}>{id}</Paper>
</Grid>

Id.propTypes = { id: PropTypes.number.isRequired }
