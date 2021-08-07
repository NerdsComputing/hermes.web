import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/header/style'
import { Home } from 'core/layout/navbar/navigation/home'
import { NavigateToDetections } from 'core/layout/navbar/navigation/detections'
import { NavigateToCameras } from 'core/layout/navbar/navigation/cameras'

export const Header = () => <Grid item xs={5} sm={5} md={5} lg={5} xl={5} classes={useStyles()}>
  <Home />
  <NavigateToDetections />
  <NavigateToCameras />
</Grid>
