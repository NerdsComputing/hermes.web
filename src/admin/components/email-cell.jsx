import React from 'react'
import PropTypes from 'prop-types'
import { TableCell } from '@material-ui/core'

import { useStyles } from 'admin/components/style'

export const EmailCell = ({ children }) => <TableCell align={'left'} classes={useStyles()}>
  {children}
</TableCell>

EmailCell.propTypes = { children: PropTypes.node.isRequired }
