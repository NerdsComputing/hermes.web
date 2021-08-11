import React from 'react'
import { Grid } from '@material-ui/core'

import { DesktopVersion } from 'detections/table/desktop'
import { MobileVersion } from 'detections/table/mobile'

export const Table = () => <Grid item xs={12} sm={12} md={12} lg={12}>
  <DesktopVersion />
  <MobileVersion />
</Grid>
