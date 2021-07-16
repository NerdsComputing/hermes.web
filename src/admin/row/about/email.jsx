import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'admin/row/about/style'

export const Email = ({ user }) => <Grid item>
  <Grid container className={useStyles().alignment}>
    <Typography>
      {user.email}
    </Typography>
  </Grid>
</Grid>

Email.propTypes = { user: PropTypes.object.isRequired }
