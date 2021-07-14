import React from 'react'
import { Box, Typography } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'

import { useStyles } from 'detection/card/content/items/items-style'

export const Description = () => <Box classes={useStyles()}>
  <DescriptionIcon />
  <Typography variant={'h6'} classes={useStyles().contentText}>
    Description
  </Typography>
</Box>
