import React from 'react'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { useStyles } from 'detections/filters/accordion-details/timestamp/style'
import { TextField } from '@material-ui/core'

export const Input = () => <InputWrapper>
  <TextField type={'datetime-local'} label={'From'} variant={'outlined'}
             classes={useStyles()}
             defaultValue={'2017-05-24T10:30'} />
  <TextField type={'datetime-local'} label={'To'} variant={'outlined'}
             classes={useStyles()}
             defaultValue={'2017-05-24T10:30'} />
</InputWrapper>
