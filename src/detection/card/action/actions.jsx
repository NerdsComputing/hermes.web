import React from 'react'
import { CardActions, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/action/style'

export const Actions = ({ children }) => <CardActions classes={useStyles()}>
  <Grid container justify={'space-around'} alignContent={'center'}>
    {children}
  </Grid>
</CardActions>

Actions.propTypes = { children: PropTypes.array.isRequired }
