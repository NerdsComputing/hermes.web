import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'

export const Row = item => <TableRow>
  <TableCell align={'center'}>item.class</TableCell>
  <TableCell align={'center'}>item.score</TableCell>
</TableRow>
