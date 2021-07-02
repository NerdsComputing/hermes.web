import React from 'react'
import { AppBar } from '@material-ui/core'

import { Title } from 'navbar/title'
import { UserContent } from 'navbar/user-content'
import { AppBarWrapper } from 'navbar/appbar-wrapper'

export const Navbar = () => <AppBar position={'static'}>
  <AppBarWrapper>
    <Title />
    <UserContent />
  </AppBarWrapper>
</AppBar>
