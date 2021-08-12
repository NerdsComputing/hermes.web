import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detections/filters/accordion-details/filter/style'

export const Wrapper = ({ children }) => <Grid container justify={'space-between'} alignItems={'center'}
                                               classes={useStyles()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
