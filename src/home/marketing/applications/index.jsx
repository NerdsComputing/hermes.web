import React from 'react'
import { Typography } from '@material-ui/core'

import { ItemWrapper } from 'home/marketing/item-wrapper'
import { List } from 'home/marketing/applications/list'
import { useTextStyle } from 'home/marketing/styles/text-style'

export const Applications = () => <ItemWrapper>
  <Typography color={'primary'} classes={useTextStyle()}>Applications</Typography>
  <List />
</ItemWrapper>
