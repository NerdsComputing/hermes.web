import React from 'react'
import PropTypes from 'prop-types'
import { TableCell } from '@material-ui/core'

import { useStyles } from 'admin/components/cell/style'

export const CenterCell = ({ children }) => <TableCell align={'center'} classes={useStyles()}>
  {children}
</TableCell>

CenterCell.propTypes = { children: PropTypes.node.isRequired }
