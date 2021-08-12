import React from 'react'
import { Grid } from '@material-ui/core'

import { Input } from 'detections/filters/accordion-details/score/input'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'

export const Score = index => <FilterWrapper>
  <FilterTitle title={'Score'} />
  <Input />
  <Grid container item xs={1} sm={2} md={2} justify={'flex-end'} alignContent={'center'}>
    <RemoveButton index={index} type={'Score'} />
  </Grid>
</FilterWrapper>
