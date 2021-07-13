import React from 'react'

import { Grid, Paper } from '@material-ui/core'

import { useStyle } from 'user/style'

export const Score = () => <Grid item xs={3}>
  <Paper className={useStyle().paper}>detection_score</Paper>
</Grid>
