import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useStyles } from 'about/style'

export const Wrapper = ({ children }) => <Grid container spacing={6} classes={useStyles()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
