import React from 'react'
import { FormControl, InputLabel } from '@material-ui/core'

import { Select } from 'detections/filters/accordion-details/cameras/select'
import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { useStyles } from 'detections/filters/accordion-details/filter-style'

export const Input = () => <InputWrapper>
  <FormControl variant={'outlined'} classes={useStyles()}>
    <InputLabel id={'cameras-input'}>Cameras</InputLabel>
    <Select />
  </FormControl>
</InputWrapper>
