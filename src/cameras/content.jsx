import React from 'react'
import YouTube from 'react-youtube'
import { Box, Grid } from '@material-ui/core'

import { Map } from 'cameras/map'
import { settings } from 'settings'
import { useLivestreamProps } from 'cameras/hooks/use-livestream-props'

export const Content = () => <Grid xs={12} sm={11} md={9} lg={8}>
  <Box pt={3} style={{ height: '80vh', width: '100%' }}>
    <Map />
  </Box>
  <Grid {...useLivestreamProps()}>
    <YouTube videoId={settings().sources[0]} />
  </Grid>
</Grid>

