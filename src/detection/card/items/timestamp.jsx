import React from 'react'
import { Box } from '@material-ui/core'
import { WatchLater } from '@material-ui/icons'

import { useStyles } from 'detection/card/items/style'
import { TimestampItem } from 'detection/card/items/timestamp-item'

export const Timestamp = () => <Box classes={useStyles()}>
  <WatchLater />
  <TimestampItem />
</Box>
