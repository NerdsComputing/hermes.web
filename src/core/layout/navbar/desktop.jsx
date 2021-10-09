import React from 'react'
import { Hidden } from '@material-ui/core'

import { AppBar } from 'core/layout/navbar/appbar'
import { Header } from 'core/layout/navbar/header'
import { LogoDesktop } from 'core/layout/navbar/logo/logo-desktop'

export const DesktopNavbar = () => <Hidden smDown>
  <AppBar>
    <LogoDesktop />
    <Header />
  </AppBar>
</Hidden>
