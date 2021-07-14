import React from 'react'

import { items } from 'user/header/items'
import { HeaderTitles } from 'user/header/header-titles'

export const TableHeader = () => items.map((items, index) => <HeaderTitles items={items} key={index} />)
