import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Id } from 'admin/id'
import { CenterCell } from 'admin/components/center-cell'
import { StyledRow } from 'admin/components/styled-row'
import { EmailCell } from 'admin/components/email-cell'
import { useStyles } from 'admin/body/style'

export const Body = ({ user }) => <StyledRow key={user.id}>
  <Id user={user} />
  <EmailCell>
    <Typography className={useStyles().root}>{user.email}</Typography>
  </EmailCell>
  <CenterCell align={'center'}>:)</CenterCell>
</StyledRow>

Body.propTypes = { user: PropTypes.object.isRequired }
