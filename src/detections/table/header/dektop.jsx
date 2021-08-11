import React from 'react'
import { TableCell } from '@material-ui/core'

import { titles } from 'detections/table/header/desktop-items'

export const Desktop = () => titles.map((item, index) => <TableCell key={index} align={'center'}>{item}</TableCell>)
