import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Typography } from '@material-ui/core'

import { CenterMessage } from 'detection/center-message'

export const Error = () => <CenterMessage>
  <HighlightOffIcon style={{ fontSize: 70 }} />
  <Typography>Sorry, something went wrong</Typography>
</CenterMessage>
