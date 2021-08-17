import React from 'react'
import { List } from '@material-ui/core'

import { Search } from 'cameras/search'
import { Items } from 'cameras/list/items'
import { useListStyle } from 'cameras/list/hooks/use-list-style'
import { Behaviour } from 'cameras/behaviour'

export const Ids = () => <>
  <Behaviour />
  <Search />
  <List classes={useListStyle()}>
    <Items />
  </List>
</>

