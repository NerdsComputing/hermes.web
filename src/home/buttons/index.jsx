import React from 'react'
import { Grid } from '@material-ui/core'
import { Camera } from 'home/buttons/camera'
import { DetectionButton } from 'home/buttons/detection-button'

export const Buttons = () => <Grid container spacing={'10'} justify={'center'}>
  <Camera>See Cameras</Camera>
  <DetectionButton>See Detections</DetectionButton>
</Grid>
