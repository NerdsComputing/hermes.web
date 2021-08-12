import React from 'react'

import { titles } from 'detections/table/header/items'
import { Cell } from 'detections/table/header/cell'

export const Cells = () => titles.map((item, index) => <Cell item={item} key={index} />)
