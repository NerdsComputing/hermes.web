import { useStyles } from 'detections/chart/style'
import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

export const CenterMessage = ({ children }) => <Grid container justify={'center'} direction={'column'}
                                                     alignItems={'center'} classes={useStyles()}>
  {children}
</Grid>

CenterMessage.propTypes = { children: PropTypes.node.isRequired }
