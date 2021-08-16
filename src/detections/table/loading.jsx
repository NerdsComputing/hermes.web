import React from 'react'
import { Typography, CircularProgress } from '@material-ui/core'

import { CenterMessage } from 'detections/table/center-message'

export const Loading = () => <CenterMessage>
  <CircularProgress disableShrink />
  <Typography>Loading data...</Typography>
</CenterMessage>
