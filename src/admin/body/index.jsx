import React from 'react'

import { users } from 'admin/body/users'
import { Row } from 'admin/row'
import { Alignment } from 'admin/body/alignment'

export const Body = () => <Alignment>
  { users.map(user => <Row key={user} user={user} />) }
</Alignment>
