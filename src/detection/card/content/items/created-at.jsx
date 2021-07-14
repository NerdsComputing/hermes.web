import React from 'react'
import { Box, Typography } from '@material-ui/core'
import WatchLaterIcon from '@material-ui/icons/WatchLater'

import { useStyles } from 'detection/card/content/items/items-style'

export const CreatedAt = () => <Box classes={useStyles()}>
  <WatchLaterIcon />
  <Typography variant={'h6'} align={'center'} classes={useStyles().contentText}>
    Created at
  </Typography>
</Box>
