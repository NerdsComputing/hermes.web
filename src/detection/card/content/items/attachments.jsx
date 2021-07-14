import React from 'react'
import { Box, Typography } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'

import { useStyles } from 'detection/card/content/items/items-style'

export const Attachments = () => <Box classes={useStyles()}>
  <DescriptionIcon />
  <Typography variant={'h6'} align={'center'} classes={useStyles().contentText}>
    Attachments
  </Typography>
</Box>
