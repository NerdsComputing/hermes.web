import React from 'react'

import { List } from '@material-ui/core'
import { useListStyle } from 'cameras/list/hooks/use-list-style'
import { Items } from 'cameras/list/items'

export const Content = () => <List classes={useListStyle()}>
  <Items />
</List>
