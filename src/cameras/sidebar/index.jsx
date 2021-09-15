import React from 'react'
import { Grid } from '@material-ui/core'

import { Header } from 'cameras/sidebar/header'
import { Ids } from 'cameras/sidebar/ids'

export const Sidebar = () => <Grid item xs={12} md={3}>
  <Header />
  <Ids />
</Grid>
