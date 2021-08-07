import React from 'react'
import { List } from '@material-ui/core'

import { items } from 'core/layout/navbar/responsive-drawer/mobile/drawer/items'
import { DrawerItem } from 'core/layout/navbar/responsive-drawer/mobile/drawer/drawer-item'

export const DrawerContent = () => <List>
  {
    items.map(item => <DrawerItem item={item} key={item} />)
  }
</List>
