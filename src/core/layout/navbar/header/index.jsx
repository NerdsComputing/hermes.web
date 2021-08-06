import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/header/style'
import { NavigateToDetections } from 'core/layout/navbar/navigation/detections/navigate-to-detections'
import { NavigateToCameras } from 'core/layout/navbar/navigation/cameras/navigate-to-cameras'
import { Home } from 'core/layout/navbar/navigation/home/home'

export const Header = () => <Grid item xs={5} sm={5} md={5} lg={5} xl={5} className={useStyles().root}>
  <Home />
  <NavigateToDetections />
  <NavigateToCameras />
</Grid>
