import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import { usePaperStyles } from 'user/row/hooks/use-paper-styles'

export const Id = ({ id }) => <Grid item xs={3}>
  <Paper classes={usePaperStyles()}>{id}</Paper>
</Grid>

Id.propTypes = { id: PropTypes.number.isRequired }
