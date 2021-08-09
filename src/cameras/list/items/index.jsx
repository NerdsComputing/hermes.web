import React from 'react'

import { Item } from 'cameras/list/items/item'
import { useContext } from 'cameras/context'

export const Items = () => {
  const context = useContext()

  return context.rows.map((item, index) => <Item item={item} key={index} />)
}
