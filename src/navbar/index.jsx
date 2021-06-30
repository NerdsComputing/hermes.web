import React from 'react'

import { AppBar, Toolbar } from '@material-ui/core'
import { Title } from 'navbar/title'
import { Email } from 'navbar/email'
import { Gravatar } from 'navbar/gravatar'

export const Navbar = () => <AppBar position={'static'}>
  <Toolbar>
    <Title />
    <Email />
    <Gravatar />
  </Toolbar>
</AppBar>
