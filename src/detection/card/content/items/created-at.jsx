import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { WatchLater } from '@material-ui/icons'

import { useStyles } from 'detection/card/content/items/items-style'

export const CreatedAt = () => <Box classes={useStyles()}>
  <WatchLater />
  <Typography variant={'h6'} align={'center'} classes={useStyles().contentText}>
    Created at
  </Typography>
</Box>
