import React from 'react'
import { TableCell } from '@material-ui/core'

import { titles } from 'detections/table/mobile/header/items'

export const Cells = () => titles.map((item, index) => <TableCell key={index} align={'center'}>{item}</TableCell>)
