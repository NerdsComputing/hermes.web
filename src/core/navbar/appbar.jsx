import React from 'react'
import { AppBar as MaterialAppBar, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'core/navbar/style'

export const AppBar = ({ children }) => <MaterialAppBar position={'static'}>
  <Grid container className={useStyles().root} alignItems={'center'} justify={'space-between'}>
    {children}
  </Grid>
</MaterialAppBar>

AppBar.propTypes = { children: PropTypes.element.isRequired }
