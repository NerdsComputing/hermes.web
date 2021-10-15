import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useTitleStyle } from 'home/first-section/link/hooks/use-title-style'

export const Title = () => <Grid item>
  <Typography color={'primary'} classes={useTitleStyle()}>
    Jump in the revolution and install your gadget, name it and push data!
  </Typography>
</Grid>
