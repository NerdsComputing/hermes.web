import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Gravatar } from 'admin/row/gravatar'
import { Email } from 'admin/row/about/email'
import { Id } from 'admin/row/about/id'

export const Content = ({ user }) => <Grid container spacing={2}>
  <Id user={user} />
  <Gravatar />
  <Email user={user} />
</Grid>

Content.propTypes = { user: PropTypes.object.isRequired }
