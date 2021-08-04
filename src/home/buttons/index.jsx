import React from 'react'
import { Grid } from '@material-ui/core'

import { Camera } from 'home/buttons/camera'
import { Detection } from 'home/buttons/detection'

export const Live = () => <Grid container spacing={'10'} justify={'center'}>
  <Camera>See Cameras</Camera>
  <Detection>See Detections</Detection>
</Grid>
