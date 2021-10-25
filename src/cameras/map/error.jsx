import React from 'react'
import { Typography } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import { CenterMessage } from 'cameras/map/center-message'

export const Error = () => <CenterMessage>
  <HighlightOffIcon style={{ fontSize: 70 }} />
  <Typography>Sorry, something went wrong</Typography>
</CenterMessage>
