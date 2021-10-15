import React from 'react'
import { Grid } from '@material-ui/core'

import { useTitleStyle } from 'home/first-section/link/hooks/use-title-style'

export const Title = () => <Grid item>
  <p className={useTitleStyle().root}>Jump in the revolution and install your gadget, name it and push data!</p>
</Grid>
