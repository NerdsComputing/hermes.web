import React from 'react'

import { List } from '@material-ui/core'
import { useListStyle } from 'cameras/map/sidebar/content/list/hooks/use-list-style'
import { Items } from 'cameras/map/sidebar/content/list/items'

export const Content = () => <List classes={useListStyle()}>
  <Items />
</List>
