import React from 'react'
import { TextField } from '@material-ui/core'

import { useStyles } from 'detections/filters/accordion-details/filter-style'
import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'

export const Input = () => <InputWrapper>
  <TextField variant={'outlined'} classes={useStyles()} />
</InputWrapper>
