import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Hidden } from '@material-ui/core'

import { IdNumber } from 'admin/row/about/id-number'

export const Id = ({ user }) => <Hidden only={['xs']}>
  <Grid item>
    <IdNumber user={user} />
  </Grid>
</Hidden>

Id.propTypes = { user: PropTypes.object.isRequired }
