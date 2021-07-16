import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Typography } from '@material-ui/core'
import { useStyles } from 'admin/row/about/style'

export const Id = ({ user }) => <Grid item>
  <Grid container classes={useStyles()}>
    <Typography align={'center'}>
      {user.id}
    </Typography>
  </Grid>
</Grid>

Id.propTypes = { user: PropTypes.object.isRequired }
