import React from 'react'
import { AppBar, Grid } from '@material-ui/core'

import { Icon } from 'core/layout/navbar/mobile/icon'
import { LogoPhone } from 'core/layout/navbar/logo/logo-phone'

export const Content = () => <AppBar color={'transparent'} style={{ height: 95 }}>
  <Grid container justify={'space-between'} alignItems={'center'}>
    <LogoPhone />
    <Icon />
  </Grid>
</AppBar>
