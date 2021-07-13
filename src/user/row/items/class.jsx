import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import { useStyle } from 'user/row/style'

export const Class = () => <Grid item xs={3}>
  <Paper className={useStyle().paper}>detection_class</Paper>
</Grid>

