import React from 'react'
import { Typography } from '@material-ui/core'

import { camera } from 'home/queries/camera-query/camera'

export const CloseBrace = () => <Typography color={'primary'}>
  { camera.closeBrace }
</Typography>
