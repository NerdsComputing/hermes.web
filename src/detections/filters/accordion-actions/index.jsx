import React from 'react'
import { Grid } from '@material-ui/core'

import { AddFilter } from 'detections/filters/accordion-actions/add-filter'
import { FilterDetections } from 'detections/filters/accordion-actions/filter-detections'

export const Actions = () => <Grid container justify={'space-between'}>
  <AddFilter />
  <FilterDetections />
</Grid>
