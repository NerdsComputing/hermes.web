import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import { items } from 'user/header/items'
import { Components } from 'user/header/component'
import { useStyle } from 'user/header/style'

export const Header = () => <Grid container spacing={2}>
  <Grid item xs={12}>
    <Paper className={useStyle().title}>Detections</Paper>
  </Grid>
  {
    items.map((items, index) => <Components items={items} key={index} />)
  }
</Grid>

