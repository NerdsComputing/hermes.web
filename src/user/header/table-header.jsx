import React from 'react'

import { item } from 'user/header/item'
import { HeaderTitle } from 'user/header/header-title'

export const TableHeader = () => item.map((item, index) => <HeaderTitle item={item} key={index} />)
