import React from 'react'
import { Grid } from '@material-ui/core'

import { Footergrid } from 'footer/footergrid'
import { useStyles } from 'footer/styles'

export const Footer = () => <footer className={useStyles().footer}>
  <Grid className={useStyles().gridHeight} maxWidth={'lg'} container alignContent={'center'} justify={'center'}>
    <Footergrid />
  </Grid>
</footer>
