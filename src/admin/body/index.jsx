import React from 'react'
import { TableBody } from '@material-ui/core'

import { users } from 'admin/body/users'
import { Row } from 'admin/row'

export const Body = () => <TableBody>
  { users.map(user => <Row key={user} user={user} />) }
</TableBody>
