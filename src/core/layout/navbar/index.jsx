import React from 'react'

import { Title } from 'core/layout/navbar/title'
import { AppBar } from 'core/layout/navbar/appbar'
import { Login } from 'login'

export const Navbar = () => <AppBar>
  <Title />
  <Login />
</AppBar>
