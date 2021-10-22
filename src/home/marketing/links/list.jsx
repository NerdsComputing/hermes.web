import React from 'react'

import { ListWrapper } from 'home/marketing/list/list-wrapper'
import { ListItem } from 'home/marketing/list/list-item'

export const List = () => <ListWrapper>
  <ListItem text={'github.com/nerds-sh/hermes-api'} link={'https://github.com/nerds-sh/hermes.api'} beginning={'●'} />
  <ListItem text={'github.com/nerds-sh/hermes-web'} link={'https://github.com/nerds-sh/hermes.web'} beginning={'●'} />
  <ListItem text={'github.com/nerds-sh/hermes-cam'} link={'https://github.com/nerds-sh/hermes.cam'} beginning={'●'} />
</ListWrapper>
