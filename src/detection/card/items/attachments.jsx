import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Description } from '@material-ui/icons'

import { useStyles } from 'detection/card/items/style'

export const Attachments = () => <Box classes={useStyles()}>
  <Description />
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    Attachments
  </Typography>
</Box>
