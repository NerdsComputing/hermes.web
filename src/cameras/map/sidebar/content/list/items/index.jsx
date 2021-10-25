import React from 'react'

import { Item } from 'cameras/map/sidebar/content/list/items/item'
import { useItems } from 'cameras/map/sidebar/content/list/items/hooks/use-item'

export const Items = () => {
  const items = useItems()

  return items.map((item, index) => <Item item={item} key={index} />)
}
