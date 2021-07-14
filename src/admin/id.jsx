import React from 'react'
import PropTypes from 'prop-types'

import { CenterCell } from 'admin/components/center-cell'

export const Id = ({ user }) => <CenterCell component={'th'} scope={'row'} align={'center'}>
  {user.id}
</CenterCell>

Id.propTypes = { user: PropTypes.object.isRequired }
