import React from 'react'
import { Grid } from '@material-ui/core'

import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { Input } from 'detections/filters/accordion-details/cameras/input'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'

export const Cameras = index => <FilterWrapper>
  <FilterTitle title={'Cameras'} />
  <Input />
  <Grid item container xs={1} sm={2} md={2} justify={'flex-end'} alignContent={'center'}>
    <RemoveButton index={index} type={'Cameras'} />
  </Grid>
</FilterWrapper>
