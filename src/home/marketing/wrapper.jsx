import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useWrapperStyle } from 'home/marketing/styles/wrapper-style'

export const Wrapper = ({ children }) => <Grid container classes={useWrapperStyle()} justify={'space-between'}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
