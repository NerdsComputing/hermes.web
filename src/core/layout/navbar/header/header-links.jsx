import React from 'react'

import { items } from 'core/layout/navbar/header/items'
import { LinkItem } from 'core/layout/navbar/links'

export const HeaderLinks = () => items.map(item => <LinkItem item={item} key={item} />)

