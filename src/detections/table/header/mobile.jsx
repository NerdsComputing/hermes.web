import React from 'react'
import { TableCell } from '@material-ui/core'

import { titles } from 'detections/table/header/mobile-items'

export const Mobile = () => titles.map((item, index) => <TableCell key={index} align={'center'}>{item}</TableCell>)
