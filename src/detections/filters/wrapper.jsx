import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detections/filters/style'

export const Wrapper = ({ children }) => <Grid container item justify={'center'} alignContent={'center'}
                                               classes={useStyles()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
