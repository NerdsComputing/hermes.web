import React from 'react'
import { AppBar, Grid } from '@material-ui/core'

import { Icon } from 'core/layout/navbar/mobile/icon'
import { Logo } from 'core/layout/navbar/logo/logo'

export const Content = () => <AppBar color={'white'} style={{ height: 95 }} elevation={0}>
  <Grid container justify={'space-between'} alignItems={'center'}>
    <Logo />
    <Icon />
  </Grid>
</AppBar>
