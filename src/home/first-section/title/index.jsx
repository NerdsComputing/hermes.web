import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useStyle } from 'home/first-section/title/hooks/use-style'

export const Title = () => <Grid item>
  <Typography color={'primary'} classes={useStyle()}>Hermes, we build the world</Typography>
</Grid>
