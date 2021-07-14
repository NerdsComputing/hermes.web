import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/style'

export const Wrapper = ({ children }) => <Grid container justify={'center'} alignContent={'center'}
                                               classes={useStyles()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
