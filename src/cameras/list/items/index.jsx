import React from 'react'

import { Item } from 'cameras/list/items/item'
import { useItems } from 'cameras/list/items/hooks/use-item'

export const Items = () => {
  const items = useItems()

  return items.map((item, index) => <Item item={item} key={index} />)
}
