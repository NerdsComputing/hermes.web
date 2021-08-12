import React from 'react'

import { Input } from 'detections/filters/accordion-details/score/input'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'

export const Score = index => <FilterWrapper>
  <FilterTitle title={'Score'} />
  <Input />
  <RemoveButton index={index} type={'Score'} />
</FilterWrapper>
