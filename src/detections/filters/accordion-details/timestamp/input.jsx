import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { Date } from 'detections/filters/accordion-details/timestamp/date'

export const Input = () => <InputWrapper>
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Date label={'From'} />
    <Date label={'To'} />
  </MuiPickersUtilsProvider>
</InputWrapper>
