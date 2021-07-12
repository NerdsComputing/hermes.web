import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/style'

export const DetectionWrapper = ({ children }) => <Grid container justify={'center'} alignContent={'center'}
                                                        className={useStyles().root}>
  <Grid item xs={0} sm={1} md={2} lg={3} xl={4} />
  <Grid container item xs={12} sm={8} md={8} lg={6} xl={4} justify={'center'}>
    {children}
  </Grid>
  <Grid item xs={0} sm={1} md={2} lg={3} xl={4} />
</Grid>

DetectionWrapper.propTypes = { children: PropTypes.array.isRequired }
