import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import { useStyles } from 'detections/chart/style'

export const CenterMessage = ({ children }) => <Grid container justify={'center'} direction={'column'}
                                                     alignItems={'center'} classes={useStyles()}>
  {children}
</Grid>

CenterMessage.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
