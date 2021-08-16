import React from 'react'

import { Row } from 'detections/table/body/row'
import { useItems } from 'detections/table/body/hooks/use-items'

export const TableContent = () => {
  const items = useItems()

  return items.map((item, index) => <Row item={item} key={index} />)
}

