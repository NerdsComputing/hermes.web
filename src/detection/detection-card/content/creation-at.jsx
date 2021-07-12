import React from 'react'
import { Box, Typography } from '@material-ui/core'
import WatchLaterIcon from '@material-ui/icons/WatchLater'

import { useStyles } from 'detection/detection-card/content/style'

export const CreationAt = () => <Box className={useStyles().contentItem}>
  <WatchLaterIcon />
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    Creation at
  </Typography>
</Box>
