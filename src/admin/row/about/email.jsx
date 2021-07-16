import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Email = ({ user }) => <Grid item>
  <Grid container justify={'center'} style={{ height: '100%' }} alignContent={'center'}>
    <Typography>
      {user.email}
    </Typography>
  </Grid>
</Grid>

Email.propTypes = { user: PropTypes.object.isRequired }
