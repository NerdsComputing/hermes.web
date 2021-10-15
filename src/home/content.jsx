import React from 'react'
import { Grid } from '@material-ui/core'

import { Marketing } from 'home/marketing'
import { MeetTeam } from 'home/meet-team'
import { FirstSection } from 'home/first-section'
import { useGridStyle } from 'home/first-section/hooks/use-grid-style'

export const Content = () => <Grid container>
  <FirstSection />
  <Grid item justify={'left'} classes={useGridStyle()}>
    <Marketing />
    <MeetTeam />
  </Grid>
</Grid>
