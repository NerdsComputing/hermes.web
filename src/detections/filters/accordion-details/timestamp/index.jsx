import React from 'react'
import PropTypes from 'prop-types'

import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'
import { Input } from 'detections/filters/accordion-details/timestamp/input'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'

export const Timestamp = ({ index }) => <FilterWrapper>
  <FilterTitle title={'Timestamp'} />
  <Input />
  <RemoveButton index={index} type={'Timestamp'} />
</FilterWrapper>

Timestamp.propTypes = { index: PropTypes.number.isRequired }
