import React from 'react'
import { Grid } from '@material-ui/core'
import { CameraButton } from 'home/buttons/camera-button'
import { DetectionButton } from 'home/buttons/detection-button'

export const Buttons = () => <Grid container spacing={'10'} justify={'center'}>
  <CameraButton>See Cameras</CameraButton>
  <DetectionButton>See Detections</DetectionButton>
</Grid>
