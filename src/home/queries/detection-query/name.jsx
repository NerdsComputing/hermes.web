import React from 'react'
import { Typography } from '@material-ui/core'

import { detection } from 'home/queries/detection-query/detection'

export const Name = () => <Typography color={'primary'}>
  { detection.name }
</Typography>
