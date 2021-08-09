import React from 'react'
import { Hidden } from '@material-ui/core'

import { Content } from 'core/layout/navbar/mobile/content'
import { DrawerComponent } from 'core/layout/navbar/mobile/drawer/drawer-component'

export const MobileNavbar = () => <Hidden smUp>
  <Content />
  <DrawerComponent />
</Hidden>
