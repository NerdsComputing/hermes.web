import React from 'react'
import { Grid } from '@material-ui/core'

import wolf from 'sounds/image/wolf.png'
import { useStyle } from 'sounds/use-style'

export const Image = () => <Grid item xs={12} lg={6} sm={12} md={6}>
  <img src={wolf} className={useStyle().root} />
</Grid>
