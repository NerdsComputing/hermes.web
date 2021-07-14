import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyle } from 'user/header/style'

export const HeaderTitles = ({ items }) => <Grid item xs={3}>
  <Paper className={useStyle().paper}>{items}</Paper>
</Grid>

HeaderTitles.propTypes = { items: PropTypes.string.isRequired }
