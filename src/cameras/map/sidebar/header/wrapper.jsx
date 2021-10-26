import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/sidebar/header/styles'

export const Wrapper = ({ children }) => <Grid container justify={'space-between'} classes={useStyles()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
