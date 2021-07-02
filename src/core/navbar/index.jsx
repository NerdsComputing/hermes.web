import React from 'react'

import { Title } from 'core/navbar/title'
import { UserContent } from 'core/navbar/content'
import { AppBar } from 'core/navbar/appbar'

export const Navbar = () => <AppBar>
  <Title />
  <UserContent />
</AppBar>
