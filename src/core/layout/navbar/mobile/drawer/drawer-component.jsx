import React from 'react'
import { Drawer } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/mobile/drawer/style'
import { useProps } from 'core/layout/navbar/mobile/drawer/hooks/use-props'
import { DrawerContent } from 'core/layout/navbar/mobile/drawer/drawer-content'

export const DrawerComponent = () => <Drawer classes={useStyles()} {...useProps()}>
  <DrawerContent />
</Drawer>
