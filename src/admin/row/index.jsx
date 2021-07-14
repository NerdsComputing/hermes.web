import React from 'react'
import PropTypes from 'prop-types'

import { Id } from 'admin/row/id'
import { StyledRow } from 'admin/components/styled-row'
import { Email } from 'admin/row/email'
import { Gravatar } from 'admin/row/gravatar'

export const Row = ({ user }) => <StyledRow key={user.id}>
  <Id user={user} />
  <Email user={user} />
  <Gravatar />
</StyledRow>

Row.propTypes = { user: PropTypes.object.isRequired }
