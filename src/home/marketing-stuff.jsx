import React from 'react'
import { Grid } from '@material-ui/core'

import { MeetTeam } from 'home/meet-team'
import { Marketing } from 'home/marketing'

export const MarketingStuff = () => <Grid item>
  <Marketing />
  <MeetTeam />
</Grid>
