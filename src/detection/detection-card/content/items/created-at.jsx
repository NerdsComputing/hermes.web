import React from 'react'
import { Box, Typography } from '@material-ui/core'
import WatchLaterIcon from '@material-ui/icons/WatchLater'

import { useStyles } from 'detection/detection-card/content/items/items-style'

export const CreatedAt = () => <Box className={useStyles().root}>
  <WatchLaterIcon />
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    Created at
  </Typography>
</Box>
