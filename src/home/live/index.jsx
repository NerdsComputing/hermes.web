import React from 'react'
import { Grid } from '@material-ui/core'

import { NavigationButton } from 'home/live/navigation-button'

export const Live = () => <Grid container spacing={'10'} justify={'center'}>
  <NavigationButton path={'/cameras'}>See Cameras</NavigationButton>
  <NavigationButton path={'/detections'}>See Detections</NavigationButton>
</Grid>
