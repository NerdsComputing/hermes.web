import React from 'react'
import PropTypes from 'prop-types'

import { FilterWrapper } from 'detections/filters/accordion-details/filter-wrapper'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { FilterTitle } from 'detections/filters/accordion-details/filter-title'
import { Content } from 'detections/filters/accordion-details/cameras/content'

export const Cameras = ({ index }) => <FilterWrapper>
  <FilterTitle title={'Cameras'} />
  <Content />
  <RemoveButton index={index} type={'Cameras'} />
</FilterWrapper>

Cameras.propTypes = { index: PropTypes.number.isRequired }
