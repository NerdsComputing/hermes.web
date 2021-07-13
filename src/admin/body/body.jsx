import React from 'react'
import { TableCell, TableRow, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Id } from 'admin/id'
import { useStyles } from 'admin/body/style'

export const Body = ({ user }) => <TableRow key={user.id}>
  <Id user={user} />
  <TableCell className={useStyles().root}>
    <Typography className={useStyles().email}>{user.email}</Typography>
  </TableCell>
  <TableCell className={useStyles().center}>:)</TableCell>
</TableRow>

Body.propTypes = { user: PropTypes.object.isRequired }
