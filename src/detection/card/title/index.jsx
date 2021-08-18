import React from 'react'
import { CardHeader } from '@material-ui/core'

import { useStyles } from 'detection/card/title/style'
import { useItem } from 'detection/card/use-item'

export const Title = () => {
  const item = useItem()

  return <CardHeader title={`Detection ${item.id}`} classes={useStyles()} />
}
