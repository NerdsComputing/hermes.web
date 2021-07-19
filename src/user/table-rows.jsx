import React from 'react'

import { items } from 'user/items'
import { Row } from 'user/row'

export const TableRows = () => items.map(items => <Row item={items} key={items} />)
