import React from 'react'
import { Grid } from '@material-ui/core'

import { DesktopVersion} from 'detections/table/desktop'
import { MobileVersion } from 'detections/table/mobile'
import { useGridStyle } from 'detections/table/hooks/use-grid-style'

export const Table = () => <Grid item xs={7} sm={8} md={8} lg={8} classes={useGridStyle()}>
  <DesktopVersion />
  <MobileVersion />
</Grid>
