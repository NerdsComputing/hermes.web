import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'admin/row/style'

export const Email = ({ user }) => <Grid item><Typography classes={useStyles()}>{user.email}</Typography></Grid>

Email.propTypes = { user: PropTypes.object.isRequired }
