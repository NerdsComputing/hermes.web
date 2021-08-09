import React from 'react'

import { Items } from 'cameras/list/items'
import { useListStyle } from 'cameras/list/hooks/use-list-style'
import { List } from '@material-ui/core'
import { Search } from 'cameras/search'

export const Ids = () => <>
  <Search />
  <List classes={useListStyle()}>
    <Items />
  </List>
</>

