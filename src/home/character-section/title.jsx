import React from 'react'
import { Typography } from '@material-ui/core'

import { useSubtitleStyle } from 'home/character-section/hooks/use-subtitle-style'

export const Title = () => <Typography color={'primary'} classes={useSubtitleStyle()}>
  Future Characters
</Typography>
