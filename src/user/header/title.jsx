import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import { useTitleStyles } from 'user/header/hooks/use-title-styles'

export const Title = () => <Grid item xs={12}>
  <Paper classes={useTitleStyles()}>Detections</Paper>
</Grid>
