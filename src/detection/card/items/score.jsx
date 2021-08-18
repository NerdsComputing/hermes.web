import React from 'react'
import { Box } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

import { useStyles } from 'detection/card/items/style'
import { ScoreItem } from 'detection/card/items/score-item'

export const Score = () => <Box classes={useStyles()}>
  <CheckIcon />
  <ScoreItem />
</Box>
