import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyle } from 'user/header/style'

export const HeaderTitle = ({ item }) => <Grid item xs={3}>
  <Paper className={useStyle().subtitles}>{item}</Paper>
</Grid>

HeaderTitle.propTypes = { item: PropTypes.string.isRequired }
