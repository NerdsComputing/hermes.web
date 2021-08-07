import React from 'react'
import { Hidden } from '@material-ui/core'

import { Content } from 'core/layout/navbar/responsive-drawer/mobile/content'
import { DrawerComponent } from 'core/layout/navbar/responsive-drawer/mobile/drawer/drawer-component'

export const MobileNavbar = () => <Hidden smUp>
  <Content />
  <DrawerComponent />
</Hidden>
