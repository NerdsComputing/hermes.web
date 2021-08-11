import React from 'react'
import { Grid, Hidden } from '@material-ui/core'

import { Content } from 'detections/table/mobile/content'
import { Pagination } from 'detections/table/pagination'

export const MobileVersion = () => <Grid item>
  <Grid container>
    <Hidden smUp>
      <Content />
      <Pagination />
    </Hidden>
  </Grid>
</Grid>
