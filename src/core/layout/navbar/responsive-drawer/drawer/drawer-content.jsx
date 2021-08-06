import React from 'react'
import { List } from '@material-ui/core'

import { items } from 'core/layout/navbar/responsive-drawer/drawer/items'
import { DrawerItem } from 'core/layout/navbar/responsive-drawer/drawer/drawer-item'

export const DrawerContent = () => <List>
  {
    items.map((item, index) => <DrawerItem index={index} item={item} key={item} />)
  }
</List>
