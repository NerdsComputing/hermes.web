import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useSubtitleStyles } from 'user/header/hooks/use-subtitle-styles'

export const HeaderTitle = ({ item }) => <Grid item xs={3}>
  <Paper classes={useSubtitleStyles()}>{item}</Paper>
</Grid>

HeaderTitle.propTypes = { item: PropTypes.string.isRequired }
