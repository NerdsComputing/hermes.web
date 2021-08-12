import React from 'react'
import { Grid } from '@material-ui/core'

import { Table } from 'detections/table'
import { Content } from 'detections/content'

export const Detections = () => <Grid container>
  <Content />
  <Table />
</Grid>

