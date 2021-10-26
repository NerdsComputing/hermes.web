import React from 'react'
import { Button as MuiButton, Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/marker/info/button/style'
import { useProps } from 'cameras/map/marker/info/button/use-props'

export const Button = ({ cameraId }) => <Box classes={useStyles()}>
  <MuiButton {...useProps(cameraId)}>See More</MuiButton>
</Box>

Button.propTypes = { cameraId: PropTypes.string.isRequired }
