import { TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

export const Desktop = ({ item }) => <>
  <TableCell align={'center'}>{item.id}</TableCell>
  <TableCell align={'center'}>{item.class}</TableCell>
  <TableCell align={'center'}>{item.score}</TableCell>
  <TableCell align={'center'}>{item.timeStamp}</TableCell>
  <TableCell align={'center'}>cameraid</TableCell>
</>

Desktop.propTypes = { item: PropTypes.object.isRequired }
