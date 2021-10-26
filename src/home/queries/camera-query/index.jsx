import React from 'react'
import { Grid } from '@material-ui/core'

import { Name } from 'home/queries/camera-query/name'
import { OpenBrace } from 'home/queries/camera-query/open-brace'
import { Properties } from 'home/queries/camera-query/properties'
import { CloseBrace } from 'home/queries/camera-query/close-brace'

export const Camera = () => <Grid item lg={6} md={6} sm={12} xs={12}>
  <Name />
  <OpenBrace />
  <Properties />
  <CloseBrace />
</Grid>
