import React from 'react'

import { ListWrapper } from 'home/marketing/applications/list-wrapper'
import { ListItem } from 'home/marketing/applications/list-item'

export const List = () => <ListWrapper>
  <ListItem text={'water flows monitoring'} beginning={'●'} />
  <ListItem text={'trash can validation and automation'} beginning={'●'} />
  <ListItem text={'traffic monitoring'} beginning={'●'} />
  <ListItem text={'movement measurements'} beginning={'●'} />
  <ListItem text={'environment monitoring'} beginning={'●'} />
</ListWrapper>
