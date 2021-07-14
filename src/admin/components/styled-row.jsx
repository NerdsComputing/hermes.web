import React from 'react'
import { TableRow } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'admin/components/style'

export const StyledRow = ({ children }) => <TableRow classes={useStyles()}>
  {children}
</TableRow>

StyledRow.propTypes = { children: PropTypes.node.isRequired }
