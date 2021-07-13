import React from 'react'
import PropTypes from 'prop-types'
import { TableCell } from '@material-ui/core'

export const Id = ({ user }) => <TableCell component={'th'} scope={'row'} align={'center'}>
  {user.id}
</TableCell>

Id.propTypes = { user: PropTypes.object.isRequired }
