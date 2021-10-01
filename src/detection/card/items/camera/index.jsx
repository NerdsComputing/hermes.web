import React from 'react'
import CameraAltRounded from '@material-ui/icons/CameraAltRounded'
import { Box, Typography } from '@material-ui/core'

import { useStyles } from 'detection/card/items/style'
import { useTypography } from 'detection/card/items/camera/hooks/use-typography'
import { useLink } from 'detection/card/items/camera/hooks/use-link'
import { useItem } from 'detection/card/use-item'

export const Camera = () => <Box classes={useStyles()}>
  <CameraAltRounded />
  <Typography {...useTypography()}>Camera:</Typography>
  <Typography {...useLink()}>{`${useItem().camera.id}`}</Typography>
</Box>
