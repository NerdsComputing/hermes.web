import React from 'react'

import { Grid, Paper } from '@material-ui/core'

import { useStyle } from 'user/style'

export const Id = () => <Grid item xs={3}>
  <Paper className={useStyle().paper}>detection_id</Paper>
</Grid>
