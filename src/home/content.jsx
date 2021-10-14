import React from 'react'
import { Grid } from '@material-ui/core'

import { Marketing } from 'home/marketing'
import { MeetTeam } from 'home/meet-team'
import { FirstSection } from 'home/first-section'

export const Content = () => <Grid container>
  <FirstSection />
  <Grid item justify={'left'} style={{ padding: '0 15% 0 15%' }}>
    <Marketing />
    <MeetTeam />
  </Grid>
</Grid>
