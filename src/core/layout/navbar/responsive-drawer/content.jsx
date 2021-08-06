import React from 'react'
import { AppBar, Grid } from '@material-ui/core'

import { Home } from 'core/layout/navbar/navigation/home/home'
import { Icon } from 'core/layout/navbar/responsive-drawer/icon'

export const Content = () => <AppBar>
  <Grid container justify={'space-between'}>
    <Home />
    <Icon />
  </Grid>
</AppBar>
