import React from 'react'
import { TableBody } from '@material-ui/core'

import { users } from 'admin/users'
import { OneUser } from 'admin/one-user'

export const User = () => <TableBody>
  { users.map(user => <OneUser key={user} user={user} />) }
</TableBody>
