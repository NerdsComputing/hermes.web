import React from 'react'

import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'
import { Content } from 'detections/filters/accordion-details/score/content'

export const Score = index => <FilterWrapper>
  <FilterTitle title={'Score'} />
  <Content />
  <RemoveButton index={index} type={'Score'} />
</FilterWrapper>
