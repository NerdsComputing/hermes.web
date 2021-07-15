import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Gravatar } from 'admin/row/gravatar'
import { Email } from 'admin/row/about/email'
import { Id } from 'admin/row/about/id'

export const Content = ({ user }) => <Grid container spacing={2}>
  <Grid item lg={1}><Id user={user} /></Grid>
  <Gravatar />
  <Grid item lg={7}><Email user={user} /></Grid>
</Grid>

Content.propTypes = { user: PropTypes.object.isRequired }
