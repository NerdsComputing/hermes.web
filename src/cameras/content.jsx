import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { Map } from 'cameras/map'
import { Livestream } from 'cameras/livestream'
import { useLivestreamPadding } from 'cameras/hooks/use-livestream-padding'

export const Content = () => <Grid xs={12} sm={11} md={9} lg={8}>
  <Box pt={3} style={{ height: '80vh', width: '100%' }}>
    <Map />
  </Box>
  <Box pt={3} {...useLivestreamPadding()}>
    <Livestream />
  </Box>
</Grid>

