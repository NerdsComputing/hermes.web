import React from 'react'
import { Grid } from '@material-ui/core'

import { Name } from 'home/queries/detection-query/name'
import { OpenBrace } from 'home/queries/detection-query/open-brace'
import { CloseBrace } from 'home/queries/detection-query/close-brace'
import { Properties } from 'home/queries/detection-query/properties'

export const Detection = () => <Grid item lg={6} md={6} sm={12} xs={12}>
  <Name />
  <OpenBrace />
  <Properties />
  <CloseBrace />
</Grid>
