import React from 'react'
import { FormControl, InputLabel } from '@material-ui/core'

import { Select } from 'detections/filters/accordion-details/cameras/select'
import { useStyles } from 'detections/filters/accordion-details/filter-style'
import { Behaviour } from 'detections/filters/accordion-details/cameras/behaviour'

export const Input = () => <FormControl variant={'outlined'} classes={useStyles()}>
  <Behaviour />
  <InputLabel id={'cameras-input'}>Cameras</InputLabel>
  <Select />
</FormControl>
