import { CircularProgress, Typography } from '@material-ui/core'
import React from 'react'

import { CenterMessage } from 'cameras/map/center-message'

export const Loading = () => <CenterMessage>
  <CircularProgress disableShrink />
  <Typography>Loading data...</Typography>
</CenterMessage>
