import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from 'footer/styles'

export const Footergrid = () => <Grid container alignContent={'center'} justify={'center'} item xs={12} sm={4}>
  <p className={useStyles().paragraph}>
    Made with love by
    <a href={'about.jsx'}> Hermes team</a>
  </p>
</Grid>

