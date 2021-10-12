import React from 'react'
import { Hidden } from '@material-ui/core'

import { AppBar } from 'core/layout/navbar/appbar'
import { Header } from 'core/layout/navbar/header'
import { Logo } from 'core/layout/navbar/logo/logo'

export const DesktopNavbar = () => <Hidden smDown>
  <AppBar>
    <Logo />
    <Header />
  </AppBar>
</Hidden>
