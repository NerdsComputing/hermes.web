import React from 'react'
import { Grid } from '@material-ui/core'

import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'
import { Input } from 'detections/filters/accordion-details/timestamp/input'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'

export const Timestamp = index => <FilterWrapper>
  <FilterTitle title={'Timestamp'} />
  <Input />
  <Grid item container xs={1} sm={2} md={2} justify={'flex-end'} alignContent={'center'}>
    <RemoveButton index={index} type={'Timestamp'} />
  </Grid>
</FilterWrapper>
