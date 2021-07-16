import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useStyles } from 'admin/row/about/style'

export const Email = ({ user }) => <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
  <Grid container justify={'center'} className={useStyles().alignment}>
    <Typography align={'center'}>
      {user.email}
    </Typography>
  </Grid>
</Grid>

Email.propTypes = { user: PropTypes.object.isRequired }
