import React from 'react'
import { Typography } from '@material-ui/core'

import { ItemWrapper } from 'home/marketing/item-wrapper'
import { List } from 'home/marketing/demo/list'
import { useTextStyle } from 'home/marketing/styles/text-style'

export const Demo = () => <ItemWrapper>
  <Typography color={'primary'} classes={useTextStyle()}>
    Demo:
  </Typography>
  <List />
</ItemWrapper>
