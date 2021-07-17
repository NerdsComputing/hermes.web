import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'admin/row/about/style'

export const IdNumber = ({ user }) => <Grid container className={useStyles().alignment}>
  <Typography align={'center'} classes={useStyles()}>
    {user.id}
  </Typography>
</Grid>

IdNumber.propTypes = { user: PropTypes.object.isRequired }
