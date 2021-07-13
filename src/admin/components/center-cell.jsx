import React from 'react'
import PropTypes from 'prop-types'
import { TableCell } from '@material-ui/core'
import { useStyles } from 'admin/components/style'

export const CenterCell = ({ children }) => <TableCell align={'center'} className={useStyles().root}>
  {children}
</TableCell>

CenterCell.propTypes = { children: PropTypes.node.isRequired }
