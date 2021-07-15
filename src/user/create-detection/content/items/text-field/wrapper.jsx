import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => <Grid container justify={'center'} alignItems={'center'}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
