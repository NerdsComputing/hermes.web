import React from 'react'
import CameraAltRounded from '@material-ui/icons/CameraAltRounded'
import { Box } from '@material-ui/core'

import { useStyles } from 'detection/card/items/style'
import { Item } from 'detection/card/items/camera/item'

export const Camera = () => <Box classes={useStyles()}>
  <CameraAltRounded />
  <Item />
</Box>
