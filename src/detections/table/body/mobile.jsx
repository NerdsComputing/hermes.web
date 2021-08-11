import React from 'react'
import { TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Mobile = ({ item }) => <>
  <TableCell align={'center'}>{item.class}</TableCell>
  <TableCell align={'center'}>{item.timeStamp}</TableCell>
</>

Mobile.propTypes = { item: PropTypes.object.isRequired }
