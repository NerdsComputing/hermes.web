import React from 'react'
import { Drawer } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/responsive-drawer/mobile/drawer/style'
import { useProps } from 'core/layout/navbar/responsive-drawer/mobile/drawer/hooks/use-props'
import { DrawerContent } from 'core/layout/navbar/responsive-drawer/mobile/drawer/drawer-content'

export const DrawerComponent = () => <Drawer classes={useStyles()} {...useProps()}>
  <DrawerContent />
</Drawer>
