import React from 'react'
import { Typography } from '@material-ui/core'

import { detection } from 'home/queries/detection-query/detection'

export const CloseBrace = () => <Typography color={'primary'}>
  { detection.closeBrace }
</Typography>
