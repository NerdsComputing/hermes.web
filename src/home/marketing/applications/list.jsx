import React from 'react'

import { ListWrapper } from 'home/marketing/applications/list-wrapper'
import { ListItem } from 'home/marketing/applications/list-item'

export const List = () => <ListWrapper>
  <ListItem text={'● water flows monitoring'} />
  <ListItem text={'● trash can validation and automation'} />
  <ListItem text={'● traffic monitoring'} />
  <ListItem text={'● movement measurements'} />
  <ListItem text={'● environment monitoring'} />
</ListWrapper>
