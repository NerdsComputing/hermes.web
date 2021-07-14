import React from 'react'

import { items } from 'user/header/items'
import { Components } from 'user/header/component'

export const TableHeader = () => items.map((items, index) => <Components items={items} key={index} />)
