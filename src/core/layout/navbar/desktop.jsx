import React from 'react'
import { Hidden } from '@material-ui/core'

import { Login } from 'login'
import { AppBar } from 'core/layout/navbar/appbar'
import { Header } from 'core/layout/navbar/header'

export const DesktopNavbar = () => <Hidden xsDown>
  <AppBar>
    <Header />
    <Login />
  </AppBar>
</Hidden>
