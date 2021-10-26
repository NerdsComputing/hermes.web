import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { useStyles } from 'home/first-character/character-section/use-style'

export const Image = () => <Grid item>
  <Box classes={useStyles()} />
</Grid>
