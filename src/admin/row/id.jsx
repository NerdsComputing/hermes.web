import React from 'react'
import PropTypes from 'prop-types'

import { Cell } from 'admin/components/cell'

export const Id = ({ user }) => <Cell alignment={'center'}>
  {user.id}
</Cell>

Id.propTypes = { user: PropTypes.object.isRequired }
