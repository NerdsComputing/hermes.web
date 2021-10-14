import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyle } from 'home/first-section/link/style'

export const Title = () => <Grid item>
  <p className={useStyle().title}>Jump in the revolution and install your gadget, name it and push data!</p>
</Grid>
