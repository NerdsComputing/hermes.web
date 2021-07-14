import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'admin/body/style'
import { EmailCell } from 'admin/components/cell/email-cell'

export const Email = ({ user }) => <EmailCell>
  <Typography className={useStyles().root}>{user.email}</Typography>
</EmailCell>

Email.propTypes = { user: PropTypes.object.isRequired }
