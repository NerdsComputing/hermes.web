import React from 'react'
import { Grid } from '@material-ui/core'

import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { Input } from 'detections/filters/accordion-details/class/input'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'

export const Class = index => <FilterWrapper>
  <FilterTitle title={'Class'} />
  <Input />
  <Grid container item xs={1} sm={2} md={2} lg={2} xl={2} justify={'flex-end'} alignContent={'center'}>
    <RemoveButton index={index} type={'Class'} />
  </Grid>
</FilterWrapper>

