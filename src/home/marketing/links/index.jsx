import React from 'react'
import { Typography } from '@material-ui/core'

import { ItemWrapper } from 'home/marketing/item-wrapper'
import { List } from 'home/marketing/links/list'
import { useTextStyle } from 'home/marketing/styles/text-style'

export const Links = () => <ItemWrapper>
  <Typography color={'primary'} classes={useTextStyle()}>
    Links:
  </Typography>
  <List />
</ItemWrapper>
