import React from 'react'
import { TextField } from '@material-ui/core'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { useProps } from 'detections/filters/accordion-details/class/use-props'

export const Input = () => <InputWrapper>
  <TextField {...useProps()} />
</InputWrapper>
