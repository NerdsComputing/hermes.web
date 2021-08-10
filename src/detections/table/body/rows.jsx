import React from 'react'

import { detections } from 'detections/table/body/data'
import { Row } from 'detections/table/body/row'

export const Rows = () => detections.map((item, index) => <Row item={item} key={index} />)
