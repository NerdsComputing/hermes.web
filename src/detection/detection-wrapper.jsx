import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/style'

export const DetectionWrapper = ({ children }) => <Grid container justify={'center'} alignContent={'center'}
                                                        className={useStyles().root}>
  {children}
</Grid>

DetectionWrapper.propTypes = { children: PropTypes.element.isRequired }
