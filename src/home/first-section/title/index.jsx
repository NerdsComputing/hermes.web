import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyle } from 'home/first-section/title/style'

export const Title = () => <Grid item>
  <h1 className={useStyle().head}>Hermes, we build the world</h1>
</Grid>
