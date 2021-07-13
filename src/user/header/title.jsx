import React from 'react'

import { Grid, Paper } from '@material-ui/core'
import { useStyle } from 'user/style'

export const Title = () => <Grid item xs={12}>
  <Paper className={useStyle().title}>Detections</Paper>
</Grid>
