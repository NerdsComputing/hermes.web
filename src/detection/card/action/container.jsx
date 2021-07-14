import React from 'react'
import { CardActions as MaterialCardActions, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/action/style'

export const CardAction = ({ children }) => <MaterialCardActions classes={useStyles()}>
  <Grid container justify={'space-around'} alignContent={'center'}>
    {children}
  </Grid>
</MaterialCardActions>

CardAction.propTypes = { children: PropTypes.array.isRequired }
