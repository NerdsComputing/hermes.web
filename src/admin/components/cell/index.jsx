import React from 'react'
import PropTypes from 'prop-types'
import { TableCell } from '@material-ui/core'

import { useStyles } from 'admin/components/cell/style'

export const Cell = ({ children, alignment }) => <TableCell align={alignment} classes={useStyles()}>
  {children}
</TableCell>

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  alignment: PropTypes.object.isRequired,
}
