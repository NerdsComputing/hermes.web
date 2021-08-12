import React from 'react'
import { Typography, CircularProgress } from '@material-ui/core'

import { CenterMessage } from 'detections/chart/center-message'

export const Loading = () => <CenterMessage>
  <CircularProgress disableShrink />
  <Typography>Loading data...</Typography>
</CenterMessage>
