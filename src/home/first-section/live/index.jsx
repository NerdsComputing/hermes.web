import React from 'react'
import { Grid } from '@material-ui/core'

import { SeeCameras } from 'home/first-section/live/buttons/see-cameras'
import { SeeDetections } from 'home/first-section/live/buttons/see-detections'
import { useStyle } from 'home/first-section/live/hooks/use-style'

export const Live = () => <Grid item classes={useStyle()} justify={'left'}>
  <Grid container justify={'left'}>
    <SeeCameras />
    <SeeDetections />
  </Grid>
</Grid>
