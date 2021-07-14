import React from 'react'
import { TableHead } from '@material-ui/core'

import { useStyles } from 'admin/head/style'
import { CenterCell } from 'admin/components/cell/center-cell'

export const Head = () => <TableHead>
  <CenterCell className={useStyles().idCell}>Id</CenterCell>
  <CenterCell className={useStyles().emailCell}>Email</CenterCell>
  <CenterCell className={useStyles().gravatarCell}>Gravatar</CenterCell>
</TableHead>
