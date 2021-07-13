import React from 'react'
import { Box, Typography } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'

import { useStyles } from 'detection/detection-card/content/items/items-style'

export const Attachements = () => <Box className={useStyles().contentItem}>
  <DescriptionIcon />
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    Attachements
  </Typography>
</Box>
