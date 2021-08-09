import React from 'react'
import { Grid } from '@material-ui/core'

import { Home } from 'core/layout/navbar/links/home'
import { NavigateToCameras } from 'core/layout/navbar/links/cameras'
import { NavigateToDetections } from 'core/layout/navbar/links/detections'

export const Header = () => <Grid item container xs={12} sm={8} md={9} lg={10}>
  <Home />
  <NavigateToDetections />
  <NavigateToCameras />
</Grid>
