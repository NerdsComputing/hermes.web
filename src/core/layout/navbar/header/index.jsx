import React from 'react'
import { Grid } from '@material-ui/core'

import { Home } from 'core/layout/navbar/links/home'
import { useStyles } from 'core/layout/navbar/header/style'
import { NavigateToDetections } from 'core/layout/navbar/links/detections'
import { NavigateToCameras } from 'core/layout/navbar/links/cameras'

export const Header = () => <Grid item xs={5} sm={5} md={5} lg={5} xl={5} classes={useStyles()}>
  <Home />
  <NavigateToDetections />
  <NavigateToCameras />
</Grid>
