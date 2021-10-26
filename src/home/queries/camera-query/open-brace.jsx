import React from 'react'
import { Typography } from '@material-ui/core'

import { camera } from 'home/queries/camera-query/camera'

export const OpenBrace = () => <Typography color={'primary'}>
  { camera.openBrace }
</Typography>
