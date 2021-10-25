import React from 'react'

import { Wrapper } from 'cameras/map/sidebar/content/wrapper'
import { Search } from 'cameras/map/sidebar/content/search'
import { ItemIds } from 'cameras/map/sidebar/content/list/item-ids'

export const Content = () => <Wrapper>
  <Search />
  <ItemIds />
</Wrapper>
