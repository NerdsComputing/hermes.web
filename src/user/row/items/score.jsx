import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import { usePaperStyles } from 'user/row/hooks/use-paper-styles'

export const Score = () => <Grid item xs={3}>
  <Paper classes={usePaperStyles()}>detection_score</Paper>
</Grid>
