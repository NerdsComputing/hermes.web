import React from 'react'

import { Row } from 'detections/table/body/row'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const TableContent = () => {
  const items = useSelector(({ detections }) => get(detections, 'get.data.items', []))

  return items.map((item, index) => <Row item={item} key={index} />)
}

