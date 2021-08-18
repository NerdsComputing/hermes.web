import React from 'react'
import { Box } from '@material-ui/core'
import CategoryIcon from '@material-ui/icons/Category'

import { useStyles } from 'detection/card/items/style'
import { Item } from 'detection/card/items/class/item'

export const Class = () => <Box classes={useStyles()}>
  <CategoryIcon />
  <Item />
</Box>
