import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'admin/row/style'
import { Cell } from 'admin/components/cell'

export const Email = ({ user }) => <Cell alignment={'left'}>
  <Typography classes={useStyles()}>{user.email}</Typography>
</Cell>

Email.propTypes = { user: PropTypes.object.isRequired }
