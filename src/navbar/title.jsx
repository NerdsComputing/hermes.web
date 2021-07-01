import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useStyles } from 'navbar/style'

export const Title = () => <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
  <Typography variant={'h6'} className={useStyles().title}>
    Hermes
  </Typography>
</Grid>
