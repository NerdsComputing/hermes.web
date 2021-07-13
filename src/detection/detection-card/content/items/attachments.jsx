import React from 'react'
import { Box, Typography } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'

import { useStyles } from 'detection/detection-card/content/items/items-style'

export const Attachments = () => <Box className={useStyles().root}>
  <DescriptionIcon />
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    Attachments
  </Typography>
</Box>
