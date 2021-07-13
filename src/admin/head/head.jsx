import React from 'react'
import { TableHead } from '@material-ui/core'
import { CenterCell } from 'admin/components/center-cell'
import { useStyles } from 'admin/head/style'

export const Head = () => <TableHead>
  <CenterCell className={useStyles().idCell}>Id</CenterCell>
  <CenterCell className={useStyles().emailCell}>Email</CenterCell>
  <CenterCell className={useStyles().gravatarCell}>Gravatar</CenterCell>
</TableHead>
