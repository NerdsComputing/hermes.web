import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/title/style'

export const Title = () => <Grid item xs={5} sm={5} md={5} lg={5} xl={5} className={useStyles().root}>
  <Typography variant={'h6'}>
    Hermes
  </Typography>
</Grid>
