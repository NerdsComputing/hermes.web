import React from 'react'
import { Typography } from '@material-ui/core'

import { detection } from 'home/queries/detection-query/detection'

export const OpenBrace = () => <Typography color={'primary'}>
  { detection.openBrace }
</Typography>
