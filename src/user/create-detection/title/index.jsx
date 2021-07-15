import React from 'react'
import { DialogTitle, Typography } from '@material-ui/core'

import { useStyles } from 'user/create-detection/title/style'

export const Title = () => <DialogTitle classes={useStyles()}>
  <Typography variant={'h6'}>Edit Task-Name</Typography>
</DialogTitle>
