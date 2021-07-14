import React from 'react'
import PropTypes from 'prop-types'

import { Id } from 'admin/body/id'
import { StyledRow } from 'admin/components/row/styled-row'
import { Email } from 'admin/body/email'
import { Gravatar } from 'admin/body/gravatar'

export const Body = ({ user }) => <StyledRow key={user.id}>
  <Id user={user} />
  <Email user={user} />
  <Gravatar />
</StyledRow>

Body.propTypes = { user: PropTypes.object.isRequired }
