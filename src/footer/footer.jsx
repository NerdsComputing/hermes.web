import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { Footergrid } from 'footer/footergrid'
import { useStyles } from 'footer/styles'

export const Footer = () => <footer className={useStyles().footer}>
  <Box display={'flex'} justifyContent={'center'}>
    <Grid className={useStyles().gridHeight} maxWidth={'lg'}>
      <Footergrid />
    </Grid>
  </Box>
</footer>
