import React from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core'

import { Desktop } from 'detections/table/header/dektop'
import { Mobile } from 'detections/table/header/mobile'

export const Cells = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return matches ? <Desktop /> : <Mobile />
}
