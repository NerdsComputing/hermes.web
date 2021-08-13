import React from 'react'
import PropTypes from 'prop-types'

import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { Input } from 'detections/filters/accordion-details/class/input'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'

export const Class = ({ index }) => <FilterWrapper>
  <FilterTitle title={'Class'} />
  <Input />
  <RemoveButton index={index} type={'Class'} />
</FilterWrapper>

Class.propTypes = { index: PropTypes.number.isRequired }

