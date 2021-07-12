import React from 'react'

import { Title } from 'core/layout/navbar/title'
import { UserContent } from 'core/layout/navbar/content'
import { AppBar } from 'core/layout/navbar/appbar'

export const Navbar = () => <AppBar>
  <Title />
  <UserContent />
</AppBar>
