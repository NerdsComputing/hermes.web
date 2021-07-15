import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'

export const Id = ({ user }) => <Grid item>
  <Typography>
    {user.id}
  </Typography>
</Grid>

Id.propTypes = { user: PropTypes.object.isRequired }
