import React from 'react'
import { Typography } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import { CenterMessage } from 'cameras/list/center-message'

export const Error = () => <CenterMessage>
  <HighlightOffIcon style={{ fontSize: 70 }} />
  <Typography>Sorry, something went wrong</Typography>
</CenterMessage>
