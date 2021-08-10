import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'

export const Row = item => <TableRow>
  <TableCell align={'center'}>item.id</TableCell>
  <TableCell align={'center'}>item.class</TableCell>
  <TableCell align={'center'}>item.score</TableCell>
  <TableCell align={'center'}>item.timestamp</TableCell>
  <TableCell align={'center'}>cameraid</TableCell>
</TableRow>
