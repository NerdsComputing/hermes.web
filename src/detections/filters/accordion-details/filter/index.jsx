import React from 'react'
import { FormControl, InputLabel } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Wrapper } from 'detections/filters/accordion-details/filter/wrapper'
import { Select } from 'detections/filters/accordion-details/filter/select'
import { RemoveButton } from 'detections/filters/accordion-details/remove-button'
import { useStyles } from 'detections/filters/accordion-details/filter-style'

export const Filter = ({ index }) => <Wrapper>
  <FormControl classes={useStyles()} variant={'outlined'}>
    <InputLabel id={'input-label'}>Select</InputLabel>
    <Select index={index} />
  </FormControl>
  <RemoveButton index={index} type={'filter'} />
</Wrapper>

Filter.propTypes = { index: PropTypes.number.isRequired }
