import React from 'react'
import { Box, Button as MuiButton } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { useProps } from 'detections/detection/modal/use-props'

export const Button = () => <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
  <MuiButton {...useProps()} endIcon={<ArrowRightAltIcon />}>Return</MuiButton>
</Box>
