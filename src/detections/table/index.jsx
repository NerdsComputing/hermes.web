import React from 'react'
import { Grid } from '@material-ui/core'

import { DesktopTableDetections } from 'detections/table/desktop'
import { MobileTableDetections } from 'detections/table/mobile'
import { useGridStyle } from 'detections/table/hooks/use-grid-style'

export const Table = () => <Grid item xs={7} sm={8} md={8} lg={8} classes={useGridStyle()}>
  <DesktopTableDetections />
  <MobileTableDetections />
</Grid>
