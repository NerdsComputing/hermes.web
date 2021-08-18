import React from 'react'
import { Typography } from '@material-ui/core'

import { useStyles } from 'detection/card/items/style'
import { useItem } from 'detection/card/use-item'

export const ScoreItem = () => {
  const item = useItem()

  return <Typography variant={'h6'} className={useStyles().contentText}>
    {`Score: ${item.score * 100}`}
  </Typography>
}
