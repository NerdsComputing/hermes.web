import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'admin/row/style'
import { Content } from 'admin/content'

export const Row = ({ user }) => <Grid item lg={12} xs={12} sm={12} md={12}>
  <Paper className={useStyles().root}>
    <Content user={user} />
  </Paper>
</Grid>

Row.propTypes = { user: PropTypes.object.isRequired }
