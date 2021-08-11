import React from 'react'
import { Grid } from '@material-ui/core'

import { Pagination } from 'detections/table/pagination'
import { Content } from 'detections/table/content'

export const Table = () => <Grid item xs={12} sm={12} md={12} lg={12}>
  <Content />
  <Pagination />
</Grid>
