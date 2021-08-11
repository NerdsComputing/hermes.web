import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core'

import { CenterMessage } from 'detections/chart/center-message'

export const Loading = () => <CenterMessage>
  <CircularProgress disableShrink />
  <Typography>Loading data...</Typography>
</CenterMessage>
