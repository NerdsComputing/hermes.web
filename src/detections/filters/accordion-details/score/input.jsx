import React from 'react'
import { TextField } from '@material-ui/core'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { useStyles } from 'detections/filters/accordion-details/filter-style'

export const Input = () => <InputWrapper>
  <TextField type={'number'} variant={'outlined'} label={'From'}
             InputProps={{ inputProps: { min: 0, max: 100 } }}
             classes={useStyles()} />
  <TextField type={'number'} variant={'outlined'} label={'To'}
             InputProps={{ inputProps: { min: 0, max: 100 } }}
             classes={useStyles()} />
</InputWrapper>
