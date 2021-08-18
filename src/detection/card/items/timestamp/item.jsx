import React from 'react'
import { Typography } from '@material-ui/core'

import { useStyles } from 'detection/card/items/style'
import { dateFormat } from 'detection/card/items/date-format'
import { useItem } from 'detection/card/use-item'

export const Item = () => {
  const item = useItem()

  return <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    {dateFormat(item.timestamp)}
  </Typography>
}
