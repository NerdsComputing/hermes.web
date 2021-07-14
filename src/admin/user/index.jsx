import React from 'react'
import { TableBody } from '@material-ui/core'

import { users } from 'admin/user/users'
import { Body } from 'admin/body'

export const User = () => <TableBody>
  { users.map(user => <Body key={user} user={user} />) }
</TableBody>
