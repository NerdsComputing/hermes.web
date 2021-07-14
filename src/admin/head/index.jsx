import React from 'react'
import { TableHead } from '@material-ui/core'

import { useStyles } from 'admin/head/style'
import { Cell } from 'admin/components/cell'

export const Head = () => <TableHead>
  <Cell alignment={'center'} className={useStyles().idCell}>Id</Cell>
  <Cell alignment={'center'} className={useStyles().emailCell}>Email</Cell>
  <Cell alignment={'center'} className={useStyles().gravatarCell}>Gravatar</Cell>
</TableHead>
